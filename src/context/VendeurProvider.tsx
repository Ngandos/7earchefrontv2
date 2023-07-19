import { ReactElement, createContext, useState, useEffect } from "react"

export type VendeurType = {
    id: number,
    enseigne: string,
    siret: string,
}

const initState: VendeurType[] = []

export type UseVendeurContextType = { vendeur: VendeurType[] }

const initContextState: UseVendeurContextType = { vendeur: [] }

const VendeurContext = createContext <UseVendeurContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[]}

export const LivreProvider = ({ children }: ChildrenType): ReactElement => {
    const [vendeur, setVendeur] = useState<VendeurType[]>(initState)

    useEffect(() => {
        const fetchVendeur = async (): Promise<VendeurType[]> => {
            const data = await fetch('http://localhost:8080/demo/vendeur')
            .then(res => {
                return res.json()
            })
            .catch(err => {
                if (err instanceof Error) console.log(err.message);
            })
            return data
        }
        fetchVendeur()
        .then(vendeur => setVendeur(vendeur))
    }, [])

    return (
        <VendeurContext.Provider value= {{ vendeur }}>
            {children}
        </VendeurContext.Provider>
    )
}

export default VendeurContext;