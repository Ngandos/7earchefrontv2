import { useState } from "react";
import ConnectForm from "./Connexion.styled";
import axios from "axios";
import { Link } from "react-router-dom";

const Connexion = () => {

    const ConnectFormData = {
        username: "",
        password: "",
    };

    const [ formData, setFormData ] = useState(ConnectFormData);

    const { username, password } = formData;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.id]: e.target.value,
        }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        setFormData(ConnectFormData);
    }

    const HandleConnexion = async() => {

        await axios.post('http://localhost:8080/demo/login')
            .then((response) => {
                console.log('Utilisateur connecté:', response.data, Connexion);
            //  toast.success('Commande passée avec succès');
            })
            .catch(error => {
                console.error('Erreur lors de la connexion:', error);
             // toast.error('Erreur lors de la création de la commande');
        });

    return Connexion;

    }
    
    return (
        <ConnectForm onSubmit={onSubmit}>
            <label className='SubLabel' htmlFor="username">Username :</label>
            <input className="CoInput"
                type="text"
                id="username" 
                placeholder="Username" 
                value={username} 
                onChange={onChange}
            />
            <br/>
            <label className='SubLabel' htmlFor="password">Password :</label>
            <input className="CoInput"
                type="text" 
                id="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
            />
            <br/>
            <button 
                type="submit" 
                className="connect" 
                onClick={HandleConnexion}
            >
                Envoyer
            </button>
            <br/>
            <p>
                Pas de compte ?<br/>
                <Link className='butt' to='/créerUnCompte'>
                    Créer un compte
                </Link> 
            </p>
        </ConnectForm>
    )
}

export default Connexion;