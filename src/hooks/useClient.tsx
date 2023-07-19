import { useContext } from "react";
import ClientContext from "../context/ClientProvider";
import { UseClientContextType } from "../context/ClientProvider";

const useClient = (): UseClientContextType => {
    return useContext(ClientContext)
} 

export default useClient;