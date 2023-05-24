import { useContext } from "react";
import ArticlesContext from "../context/ArticlesProvider";
import { UseArticlesContextType } from "../context/ArticlesProvider";

const useArticles = (): UseArticlesContextType => {
    return useContext(ArticlesContext)
} 

export default useArticles;