import ConnectForm from "./Connexion.styled";

const Connexion = () => {
    
    return(
        <ConnectForm>
            <label htmlFor="Identifiant" placeholder="Votre Identifiant">Identifiant</label>
            <input type="text" />
            <label htmlFor="Password" placeholder="Votre Password">Password</label>
            <input type="text" />
            <input type="submit"/>
        </ConnectForm>
    )
}

export default Connexion;