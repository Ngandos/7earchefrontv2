import axios from "axios";
import './Subscription.css';
import { SubscribForm, FormContainer } from "./Subscription.styled";
import { useState } from "react";
import { Link } from "react-router-dom";

const Subscription = () => {
    const SuscribeFormData = {
        adresses: [],
        commandes: [],
        username: "",
        nom: "",
        prenom: "",
        email: "",
        password: "",
        passwordConfirm: "",
    };

    const [formData, setFormData] = useState(SuscribeFormData);

    const { username, nom, prenom, email, password, passwordConfirm } = formData;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    function generateUniqueAccountNumber() {
        const timestamp = Date.now();
        const randomPart = Math.floor(Math.random() * 10000);
        return `ACCU${timestamp}${randomPart}`;
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        setFormData(SuscribeFormData);
    }

    const handleSubscription = async() => {

        const user = {
            id: 0, // Generate a unique ID
            adresses: [],
            commandes: [],
            username: username,
            nom: nom,
            prenom: prenom,
            numCompte: generateUniqueAccountNumber(),
            email: email,
            password: password,
            role: "USER",
            enabled: false,
        };

        console.log("User ", user);

        // Configure Axios to send data as JSON
        axios.defaults.headers.post['Content-Type'] = 'application/json';

        try {
            const response = await axios.post('http://localhost:8080/demo/users', user);
            console.log('Compte créé:', response.data, user);
            // toast.success('Compte créé avec succès');
        } catch (error) {
            console.error('Erreur lors de la création du compte:', error);
            // toast.error('Erreur lors de la création du compte');
        }
    }

    return (
        <SubscribForm>
            <h1>S'inscrire</h1>
            <FormContainer onSubmit={onSubmit}>
                <label className='SubLabel' htmlFor='nom' >
                    <p>Nom :</p>
                </label>
                <input className="accInput"
                    type='text' 
                    placeholder='Nom' 
                    id="nom" 
                    value={nom}
                    onChange={onChange}
                />
                <label className='SubLabel' htmlFor='prenom' >
                    <p>Prenom :</p>
                </label>
                <input className="accInput"
                    type='text' 
                    placeholder='Prenom' 
                    id="prenom" 
                    value={prenom}
                    onChange={onChange}
                />
                <label className='SubLabel' htmlFor='username'>
                    <p>Pseudo :</p>
                </label>
                <input className="accInput"
                    type='text' 
                    placeholder='Username' 
                    id="username"
                    value={username}
                    onChange={onChange}
                />
                <label className='SubLabel' htmlFor='email'>
                    <p>Email :</p>
                </label>
                <input className="accInput"
                    type='email' 
                    placeholder='Email' 
                    id='email' 
                    value={email}
                    onChange={onChange}
                />
                <label className='SubLabel' htmlFor='password' >
                    <p>Password :</p>
                </label>
                <input className="accInput"
                    type='text' 
                    placeholder='Password' 
                    id="password" 
                    value={password}
                    onChange={onChange}
                />
                <label className='SubLabel' htmlFor='passwordConfirm' >
                    <p>Password Confirm :</p>
                </label>
                <input className="accInput"
                    type='text' 
                    placeholder='Password Confirm' 
                    id="passwordConfirm" 
                    value={passwordConfirm}
                    onChange={onChange}
                />
                <button 
                    className="Subutton" 
                    type='submit' 
                    value='Envoyer' 
                    onClick={handleSubscription}
                >
                    Envoi
                </button>
                <br/>
                <p>
                    Déjà Inscrit ?<br/>
                    <Link className='butt' to='/connexion'>
                        Se connecter
                    </Link> 
                </p>
            </FormContainer>
        </SubscribForm>
    );
};

export default Subscription;
