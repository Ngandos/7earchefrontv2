import { useContext } from "react";
import AuteurContext from "../context/AuteurProvider";
import { UseAuteurContextType } from "../context/AuteurProvider";

const useAuteur= (): UseAuteurContextType => {
    return useContext(AuteurContext)
} 

export default useAuteur;