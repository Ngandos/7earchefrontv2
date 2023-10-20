import { ReactElement, createContext, useState, useEffect } from "react"

export type ClientType = {
    id: number,
    adresse: string,
    nom: string,
    prenom: string,
    numCompte: string,
    nbCommandes: number
}

const initState: ClientType[] = []

export type UseClientContextType = { Client: ClientType[] }

const initContextState: UseClientContextType = { Client: [] }

const ClientContext = createContext <UseClientContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[]}

export const ClientProvider = ({ children }: ChildrenType): ReactElement => {
    const [Client, setClient] = useState<ClientType[]>(initState)

    useEffect(() => {
        const fetchClient = async (): Promise<ClientType[]> => {
            const data = await fetch('http://localhost:8080/demo/client')
            .then(res => {
                return res.json()
            })
            .catch(err => {
                if (err instanceof Error) console.log(err.message);
            })
            return data
        }
        fetchClient()
        .then(client => setClient(client))
    }, [])

    return (
        <ClientContext.Provider value= {{ Client }}>
            {children}
        </ClientContext.Provider>
    )
}

export default ClientContext;
