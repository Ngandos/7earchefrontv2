import { ReactElement, createContext, useState, useEffect } from "react"

export type EditeurType = {
    id: number,
    enseigne: string,
}

const initState: EditeurType[] = []

export type UseEditeurContextType = { editeurs : EditeurType[] }

const initContextState: UseEditeurContextType = { editeurs: [] }

const EditeurContext = createContext <UseEditeurContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[]}

export const EditeurProvider = ({ children }: ChildrenType): ReactElement => {
    const [editeurs, setEditeur] = useState<EditeurType[]>(initState)

    useEffect(() => {
        const fetchEditeur = async (): Promise<EditeurType[]> => {
            const data = await fetch('http://localhost:8080/demo/Editeurs')
            .then(res => {
                return res.json()
            })
            .catch(err => {
                if (err instanceof Error) console.log(err.message);
            })
            return data
        }
        fetchEditeur()
        .then(editeurs => setEditeur(editeurs))
    }, [])

    return (
        <EditeurContext.Provider value= {{ editeurs }}>
            {children}
        </EditeurContext.Provider>
    )
}

export default EditeurContext;