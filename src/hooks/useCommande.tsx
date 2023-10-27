import { useContext } from "react";
import CommandeContext from "../context/CommandeProvider";
import { UseCommandeContextType } from "../context/CommandeProvider";

const useCommande = (): UseCommandeContextType => {
    return useContext(CommandeContext)
} 

export default useCommande;