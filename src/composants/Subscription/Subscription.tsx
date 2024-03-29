import { SubscribForm, FormContainer } from './Subscription.styled';
import './Subscription.css';

const Subscription = () => {
  return (
    <SubscribForm>
      <FormContainer>
        <label className='SubLabel' htmlFor='nom'>
          <p>Nom :</p>
        </label>
        <input type='text' placeholder='Nom' />

        <label className='SubLabel' htmlFor='Prenom'>
          <p>Prenom :</p>
        </label>
        <input type='text' placeholder='Prenom' />

        <label className='SubLabel' htmlFor='Adresse'>
          <p>Adresse :</p>
        </label>
        <input type='text' placeholder='Adresse' />

        <label className='SubLabel' htmlFor='Telephone'>
          <p>Téléphone :</p>
        </label>
        <input type='text' placeholder='Telephone' />

        <label className='SubLabel' htmlFor='PostCode'>
          <p>Code Postal :</p>
        </label>
        <input type='text' placeholder='Code postal' />

        <button type='submit' value='Envoyer'>
          Envoi
        </button>
      </FormContainer>
    </SubscribForm>
  );
};

export default Subscription;

