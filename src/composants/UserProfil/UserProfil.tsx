import { ClientType } from '../../context/ClientProvider';
import { ProfilCard } from './UserProfil.styled';

type PropsType = {
  client: ClientType;
  id:number;
  adresses: string;
  nom: string;
  prenom: string;
  numCompte: string;
  commandes: number;
};

const UserProfil = (client: PropsType) => {
  

  return (
    <ProfilCard>
      <div className='ProPict'>
        <img src='' alt='' />
      </div>
      <div className='details'>
        <strong>
          <p>{client.nom}</p>
        </strong>
        <strong>
          <p>{client.prenom}</p>
        </strong>
        <strong>
          <p>{client.id}</p>
        </strong>
        <strong>
          <p>{client.adresses}</p>
        </strong>
      </div>
      <div className='Second'>
        <p>Historique d'achat</p>
        {client.commandes}
      </div>
    </ProfilCard>
  );
};

export default UserProfil;

