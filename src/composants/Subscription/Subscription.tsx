import axios from "axios";
import './Subscription.css';
import { SubscribForm, FormContainer } from "./Subscription.styled";

const Subscription = () => {
  
  const onSubmit = async() => {
  
    const newUser = {
      username: String,
      email: String,
      password: String,
      enabled: Boolean,
    };

    console.log("User ", newUser);

    axios.defaults.headers.post['Content-Type'] ,'application/json';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:5173';
    axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'http://localhost:5173';
      
    await axios.post('http://localhost:8080/demo/user', newUser)
        .then((response) => {
            console.log('Compte créé:', response.data, newUser);
        //  toast.success('Commande passée avec succès');
        })
        .catch(error => {
            console.error('Erreur lors de la création du compte:', error);
         // toast.error('Erreur lors de la création de la commande');
    });

  return newUser; 
}

  return (
    <SubscribForm>
      <FormContainer>
        <label className='SubLabel' htmlFor='username'>
          <p>Pseudo :</p>
        </label>
        <input type='text' placeholder='username' id="username"/>

        <label className='SubLabel' htmlFor='Email'>
          <p>Email :</p>
        </label>
        <input type='email' placeholder='Email' id="Email"/>

        <label className='SubLabel' htmlFor='Password' >
          <p>Password :</p>
        </label>
        <input type='text' placeholder='Password' id="Password"/>

        <button type='submit' value='Envoyer' onClick={onSubmit}>
          Envoi
        </button>
      </FormContainer>
    </SubscribForm>
  );
};

export default Subscription;

