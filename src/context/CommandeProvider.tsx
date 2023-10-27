import { ReactElement, createContext, useState, useEffect } from "react"

export type CommandeType = {
    id: number,
    numComm: number,
    dateComm: Date,
    ligneCommande: {
        id: number,
        ref: string,
        categorie: string,
        nom: string,
        prixHT: number,
        prixTTC: number,
        tva: number,
        designation: string,
        qty: number,
    }
}

const initState: CommandeType[] = []

export type UseCommandeContextType = { commande : CommandeType[] }

const initContextState: UseCommandeContextType = { commande: [] }

const CommandeContext = createContext <UseCommandeContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[]}

export const CommandeProvider = ({ children }: ChildrenType): ReactElement => {
    const [commande, setCommande] = useState<CommandeType[]>(initState)

    useEffect(() => {
        const fetchCommande = async (): Promise<CommandeType[]> => {
            const data = await fetch('http://localhost:8080/demo/commande')
            .then(res => {
                return res.json()
            })
            .catch(err => {
                if (err instanceof Error) console.log(err.message);
            })
            return data
        }
        fetchCommande()
        .then(commande => setCommande(commande))
    }, [])

    return (
        <CommandeContext.Provider value= {{ commande }}>
            {children}
        </CommandeContext.Provider>
    )
}

export default CommandeContext;