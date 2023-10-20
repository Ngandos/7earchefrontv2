import { ReactElement } from 'react';
import useClient from '../../hooks/useClient';
import '../ClientList/ClientList.styled.css';
import '../../images/ID.Visuelle/CinemaBandeauCouleur.jpeg';


const ClientList = () => {

  const { Client } = useClient();

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  if (Client?.length) {
    pageContent = Client.map((client) => {

      return (
        <Client
          key={client.id}
          adresse={client.adresse}
          client={client}
          nom={client.nom}
          description={client.prenom}
          numCompte={client.numCompte}
          nbCommandes={client.nbCommandes}
        />
      );
    });
  }

  const content = 
  
    <main className='main main--clientList'>
      {pageContent}
    </main>;

  return content;
  
};

export default ClientList;

