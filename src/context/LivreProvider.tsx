import { ReactElement, createContext, useState, useEffect } from "react"

export type LivreType = {
    id: number,
    titre: string,
    auteur: string,
    nom: string,
    editeur: string,
    isbn: string,
}

const initState: LivreType[] = []

export type UseLivreContextType = { livre: LivreType[] }

const initContextState: UseLivreContextType = { livre: [] }

const LivreContext = createContext <UseLivreContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[]}

export const LivreProvider = ({ children }: ChildrenType): ReactElement => {
    const [livre, setLivre] = useState<LivreType[]>(initState)

    useEffect(() => {
        const fetchLivre = async (): Promise<LivreType[]> => {
            const data = await fetch('http://localhost:8080/demo/livres')
            .then(res => {
                return res.json()
            })
            .catch(err => {
                if (err instanceof Error) console.log(err.message);
            })
            return data
        }
        fetchLivre()
        .then(livre => setLivre(livre))
    }, [])

    return (
        <LivreContext.Provider value= {{ livre }}>
            {children}
        </LivreContext.Provider>
    )
}

export default LivreContext;