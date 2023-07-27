import { ProfilCard } from './UserProfil.styled';

const UserProfil = () => {
  return (
    <ProfilCard>
      <div className='ProPict'>
        <img src='' alt='' />
      </div>
      <div className='details'>
        <strong>
          <p>Nom : Balumé</p>
        </strong>
        <strong>
          <p>Prenom : Innocent</p>
        </strong>
        <strong>
          <p>Pseudo : Innoss</p>
        </strong>
      </div>
      <div className='Second'>
        <p>Historique d'achat</p>
      </div>
    </ProfilCard>
  );
};

export default UserProfil;

