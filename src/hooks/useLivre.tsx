import { useContext } from "react";
import LivreContext from "../context/LivreProvider";
import { UseLivreContextType } from "../context/LivreProvider";

const useLivre = (): UseLivreContextType => {
    return useContext(LivreContext)
} 

export default useLivre;