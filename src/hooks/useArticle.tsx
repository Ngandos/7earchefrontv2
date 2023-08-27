import { useContext } from "react";
import ArticlesContext from "../context/ArticleProvider";
import { UseArticlesContextType } from "../context/ArticleProvider";

const useArticles = (): UseArticlesContextType => {
    return useContext(ArticlesContext)
} 

export default useArticles;