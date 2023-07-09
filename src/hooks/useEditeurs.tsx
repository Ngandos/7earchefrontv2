import { useContext } from "react";
import EditeurContext from "../context/EditeursProvider";
import { UseEditeurContextType } from "../context/EditeursProvider";

const useEditeur = (): UseEditeurContextType => {
    return useContext(EditeurContext)
} 

export default useEditeur;