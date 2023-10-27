import ConnectForm from "./Connexion.styled";
import axios from "axios";

const Connexion = () => {

    const HandleConnexion = async() => {
        

        await axios.post('http://localhost:8080/demo/login')
            .then((response) => {
                console.log('Utilisateur connécté:', response.data, Connexion);
            //  toast.success('Commande passée avec succès');
            })
            .catch(error => {
                console.error('Erreur lors de la création de la commande:', error);
             // toast.error('Erreur lors de la création de la commande');
        });

    return Connexion;

    }
    
    return (
        <ConnectForm>
            <label htmlFor="Identifiant">Identifiant :</label>
            <input type="text" placeholder="Identifiant"/>
            <label htmlFor="Password">Password :</label>
            <input type="text" placeholder="Password"/>
            <button type="submit" className="connect" onClick={HandleConnexion}>
                Envoyer
            </button>
        </ConnectForm>
    )
}

export default Connexion;