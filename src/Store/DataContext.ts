import { createContext } from "react";
import { ArticleType } from "../context/ArticlesProvider";
import { CategorieType } from "../context/CategoriesProvider";

export interface DataContextType {
    article: ArticleType[];
    categorie: CategorieType[];
}

export const defaultState = {
    article: [],
    categorie: [],
}

const DataContext = createContext<DataContextType>(defaultState);

export default DataContext;