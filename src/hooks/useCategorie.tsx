import { useContext } from "react";
import CategoriesContext from "../context/CategorieProvider";
import { UseCategoriesContextType } from "../context/CategorieProvider";

const useCategories = (): UseCategoriesContextType => {
    return useContext(CategoriesContext)
} 

export default useCategories;