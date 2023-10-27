import { ReactElement, createContext, useState, useEffect } from "react"

export type AdresseType = {
    id: number,
    numRue: number,
    rue: string,
    codePostal: string,
    ville: string,
    pays: string

}

const initState: AdresseType[] = []

export type UseAdresseContextType = { adresse : AdresseType[] }

const initContextState: UseAdresseContextType = { adresse: [] }

const AdresseContext = createContext <UseAdresseContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[]}

export const AdresseProvider = ({ children }: ChildrenType): ReactElement => {
    const [adresse, setAdresse] = useState<AdresseType[]>(initState)

    useEffect(() => {
        const fetchAdresse = async (): Promise<AdresseType[]> => {
            const data = await fetch('http://localhost:8080/demo/Adresses')
            .then(res => {
                return res.json()
            })
            .catch(err => {
                if (err instanceof Error) console.log(err.message);
            })
            return data
        }
        fetchAdresse()
        .then(adresse => setAdresse(adresse))
    }, [])

    return (
        <AdresseContext.Provider value= {{ adresse }}>
            {children}
        </AdresseContext.Provider>
    )
}

export default AdresseContext;