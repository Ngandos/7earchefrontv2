import { useContext } from "react";
import CategoriesContext from "../context/CategoriesProvider";
import { UseCategoriesContextType } from "../context/CategoriesProvider";

const useCategories = (): UseCategoriesContextType => {
    return useContext(CategoriesContext)
} 

export default useCategories;