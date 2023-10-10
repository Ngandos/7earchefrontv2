import { ReactElement } from 'react';
import useClient from '../hooks/useClient';

import '../images/ID.Visuelle/CinemaBandeauCouleur.jpeg';
import Client from './Client/Client';

const ClientList = () => {
    
  const { client } = useClient();

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  if (client?.length) {
    pageContent = client.map((client: { id: number; nom: string; prenom: string; numCompte: string; nbCommandes: number; }) => {
      return (
        <Client
          id={client.id}
          nom={client.nom}
          prenom={client.prenom}
          numCompte={client.numCompte}
          nbCommandes={client.nbCommandes}
        />
      );
    });
  }
  
  const content = <main className='main main--client'>
    {pageContent}
  </main>;

  return content;
};

export default ClientList;

