import { ReactElement, createContext, useState, useEffect } from "react"
import { CartItemType } from "./CartProvider"

export type CommandeType = {
    id: number,
    numComm: number,
    dateComm: Date,
    contenu: [
        ligneCommande: {
            item: CartItemType,
            id: number,
            category: string,
            designation: string,
            quantite: number,
            prixHT: number,
            prixTTC: number,
            tva: string,
            ref: string,
        }
    ],
    status: string,
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