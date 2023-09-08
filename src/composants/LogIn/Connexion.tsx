import ConnectForm from './Connexion.styled';

const Connexion = () => {
	return (
		<ConnectForm>
			<label htmlFor='Identifiant'>Identifiant :</label>
			<input type='text' placeholder='Identifiant' />
			<label htmlFor='Password'>Password :</label>
			<input type='text' placeholder='Password' />
			<button type='submit' className='connect'>
				Envoyer
			</button>
		</ConnectForm>
	);
};

export default Connexion;

