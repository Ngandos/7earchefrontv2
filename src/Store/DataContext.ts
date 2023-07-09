import { createContext } from "react";
import { ArticleType } from "../context/ArticlesProvider";
import { CategorieType } from "../context/CategoriesProvider";
import { AuteurType } from "../context/AuteursProvider";
import { EditeurType } from "../context/EditeursProvider";

export interface DataContextType {
    article: ArticleType[];
    auteur: AuteurType[];
    categorie: CategorieType[];
    editeur: EditeurType[];
}

export const defaultState = {
    article: [],
    auteur: [],
    categorie: [],
    editeur: [],
}

const DataContext = createContext<DataContextType>(defaultState);

export default DataContext;