import React from 'react';
import { ClientType } from '../../context/ClientProvider';
import { ProfilCard } from './UserProfil.styled';

type PropsType = {
    client: ClientType;
};

const UserProfil: React.FC<PropsType> = ({ client }) => {
    // Assuming Image is defined or replaced with the actual image name
    const img: string = new URL(`/src/images/ID.Visuelle/${client.nom}.jpg`, import.meta.url).href;

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
                    {/* Assuming adresses is an array, map through it */}
                    {client.adresses.map((address, index) => (
                        <p key={index}>{address}</p>
                    ))}
                </strong>
            </div>
            <div className='Second'>
                <p>Historique d'achat</p>
                {/* Assuming commandes is an array, map through it */}
                {client.commandes.map((commande, index) => (
                    <p key={index}>{commande}</p>
                ))}
            </div>
        </ProfilCard>
    );
};

export default UserProfil;
