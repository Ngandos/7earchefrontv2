import { ProfilCard } from './UserProfil.styled';

const UserProfil = () => {
  return (
    <ProfilCard>
      <div className='ProPict'>
        <img src='' alt='' />
      </div>
      <div className='details'>
        <p>Nom : Balumé</p>
        <p>Prenom : Innocent</p>
        <p>Pseudo : Innoss</p>
      </div>
      <div className='Second'></div>
    </ProfilCard>
  );
};

export default UserProfil;

