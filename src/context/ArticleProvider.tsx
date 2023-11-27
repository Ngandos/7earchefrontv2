import { ReactElement, createContext, useState, useEffect } from "react"

export type ArticleType = {
    id: number,
    ref: string,
    categorie: string,
    prixHT: number,
    prixTTC: number,
    tva: number,
    designation: string,
    stock: number,
    numerique: boolean,
}

const initState: ArticleType[] = []

export type UseArticlesContextType = { articles: ArticleType[] }

const initContextState: UseArticlesContextType = { articles: [] }

const ArticlesContext = createContext <UseArticlesContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[]}

export const ArticlesProvider = ({ children }: ChildrenType): ReactElement => {
    const [articles, setArticles] = useState<ArticleType[]>(initState)

    useEffect(() => {
        const fetchArticles = async (): Promise<ArticleType[]> => {
            const data = await fetch('http://localhost:8080/demo/articles')
            .then(res => {
                return res.json()
            })
            .catch(err => {
                if (err instanceof Error) console.log(err.message);
            })
            return data
        }
        fetchArticles()
        .then(articles => setArticles(articles))
    }, [])

    return (
        <ArticlesContext.Provider value= {{ articles }}>
            {children}
        </ArticlesContext.Provider>
    )
}

export default ArticlesContext;