import { ClientType } from '../../context/ClientProvider';
import { ProfilCard } from './UserProfil.styled';

type PropsType = {
    client: ClientType;
    id:number;
    username: string,
    adresses: [];
    commandes: [];
    nom: string;
    prenom: string;
    numCompte: string;
    email: string;
    password: string,
    
};

const UserProfil = (client: PropsType) => {

    const img: string = new URL(`/src/images/ID.Visuelle/${Image}.jpg`, import.meta.url).href
  
  return (
        <ProfilCard>
            <div className='ProPict'>
                <img src={img} alt='' />
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

