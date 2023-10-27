import { useContext } from "react";
import AdresseContext from "../context/AdresseProvider";
import { UseAdresseContextType } from "../context/AdresseProvider";

const useAdresse= (): UseAdresseContextType => {
    return useContext(AdresseContext)
} 

export default useAdresse;