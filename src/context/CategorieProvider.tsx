import { ReactElement, createContext, useState, useEffect } from "react"

export type CategorieType = {
    id: number,
    nom: string,
    designation: string
}

const initState: CategorieType[] = []

export type UseCategoriesContextType = { Categories: CategorieType[] }

const initContextState: UseCategoriesContextType = { Categories: [] }

const CategoriesContext = createContext <UseCategoriesContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[]}

export const CategoriesProvider = ({ children }: ChildrenType): ReactElement => {
    const [Categories, setCategories] = useState<CategorieType[]>(initState)

    useEffect(() => {
        const fetchCategories = async (): Promise<CategorieType[]> => {
            const data = await fetch('http://localhost:3500/categories')
            .then(res => {
                return res.json()
            })
            .catch(err => {
                if (err instanceof Error) console.log(err.message);
            })
            return data
        }
        fetchCategories()
        .then(categories => setCategories(categories))
    }, [])

    return (
        <CategoriesContext.Provider value= {{ Categories }}>
            {children}
        </CategoriesContext.Provider>
    )
}
