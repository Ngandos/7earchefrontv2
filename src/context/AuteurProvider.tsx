import { ReactElement, createContext, useState, useEffect } from "react"

export type AuteurType = {
    id: number,
    nom: string,
}

const initState: AuteurType[] = []

export type UseAuteurContextType = { auteurs : AuteurType[] }

const initContextState: UseAuteurContextType = { auteurs: [] }

const AuteursContext = createContext <UseAuteurContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[]}

export const AuteursProvider = ({ children }: ChildrenType): ReactElement => {
    const [auteurs, setAuteurs] = useState<AuteurType[]>(initState)

    useEffect(() => {
        const fetchAuteurs = async (): Promise<AuteurType[]> => {
            const data = await fetch('http://localhost:8080/demo/Auteurs')
            .then(res => {
                return res.json()
            })
            .catch(err => {
                if (err instanceof Error) console.log(err.message);
            })
            return data
        }
        fetchAuteurs()
        .then(auteurs => setAuteurs(auteurs))
    }, [])

    return (
        <AuteursContext.Provider value= {{ auteurs }}>
            {children}
        </AuteursContext.Provider>
    )
}

export default AuteursContext;