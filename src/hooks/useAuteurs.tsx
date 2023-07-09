import { useContext } from "react";
import AuteurContext from "../context/AuteursProvider";
import { UseAuteurContextType } from "../context/AuteursProvider";

const useAuteur= (): UseAuteurContextType => {
    return useContext(AuteurContext)
} 

export default useAuteur;