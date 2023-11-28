import { ReactElement, createContext, useState, useEffect } from "react";

export type LivreType = {
    id: number,
    titre: string,
    auteur: string,
    nom: string,
    editeur: string,
    isbn: string,
};

const initState: LivreType[] = [];

export type UseLivreContextType = { livre: LivreType[] }

const initContextState: UseLivreContextType = { livre: initState };

const LivreContext = createContext<UseLivreContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const LivreProvider = ({ children }: ChildrenType): ReactElement => {
    const [livre, setLivre] = useState<LivreType[]>(initState);

    useEffect(() => {
        const fetchLivre = async (): Promise<LivreType[]> => {
            try {
                const response = await fetch('http://localhost:8080/demo/livres');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching Livres:', error);
                return [];
            }
        };

        fetchLivre()
            .then(livre => setLivre(livre));
    }, []);

    return (
        <LivreContext.Provider value={{ livre }}>
            {children}
        </LivreContext.Provider>
    );
}

export default LivreContext;
