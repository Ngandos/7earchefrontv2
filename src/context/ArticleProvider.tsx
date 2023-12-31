import { createContext, ReactElement, useEffect, useState } from "react";

export type ArticleType = {
    id: number;
    ref: string;
    categorie: string;
    prixHT: number;
    prixTTC: number;
    tva: number;
    designation: string;
    stock: number;
    numerique: boolean;
};

const initState: ArticleType[] = [];

export type UseArticlesContextType = {
    articles: ArticleType[];
    loading: boolean;
    error: Error | null;
};

const initContextState: UseArticlesContextType = {
    articles: [],
    loading: true,
    error: null,
};

const ArticlesContext = createContext<UseArticlesContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ArticlesProvider = ({ children }: ChildrenType): ReactElement => {
    const [articles, setArticles] = useState<ArticleType[]>(initState);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchArticles = async (): Promise<void> => {
            try {
                const response = await fetch('http://localhost:8080/demo/articles');
                if (!response.ok) {
                    throw new Error(`Error fetching articles. Status: ${response.status}`);
                }
                const data: ArticleType[] = await response.json();
                setArticles(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    return (
        <ArticlesContext.Provider value={{ articles, loading, error }}>
            {children}
        </ArticlesContext.Provider>
    );
};

export default ArticlesContext;
