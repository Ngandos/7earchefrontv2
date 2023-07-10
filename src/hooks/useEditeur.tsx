import { useContext } from "react";
import EditeurContext from "../context/EditeurProvider";
import { UseEditeurContextType } from "../context/EditeurProvider";

const useEditeur = (): UseEditeurContextType => {
    return useContext(EditeurContext)
} 

export default useEditeur;