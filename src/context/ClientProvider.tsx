import { ReactElement, createContext, useState, useEffect } from "react"

export type ClientType = {
    id: number,
    nom: string,
    prenom: string,
    numCompte: string,
    commandes: [],
    adresses: [],
}

const initState: ClientType[] = []

export type UseClientContextType = { client: ClientType[] }

const initContextState: UseClientContextType = { client: [] }

const ClientContext = createContext <UseClientContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[]}

export const ClientProvider = ({ children }: ChildrenType): ReactElement => {
    const [client, setClient] = useState<ClientType[]>(initState)

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
        <ClientContext.Provider value= {{ client }}>
            {children}
        </ClientContext.Provider>
    )
}

export default ClientContext;
