import { ReactElement } from 'react';
import '../ClientList/ClientList.styled.css';
import '../../images/ID.Visuelle/CinemaBandeauCouleur.jpeg';
import { ClientType } from '../../context/ClientProvider';
import Client from '../Client/Client';
import useClient from '../../hooks/useClient';

const ClientList = () => {

  const {client} = useClient();

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  if (client?.length) {
    pageContent = client.map((client: ClientType) => {

      return (

        <Client
          id={client.id}
          adresses={""}
          client={client}
          nom={client.nom}
          prenom={client.prenom}
          numCompte={client.numCompte}
          commandes={[]}
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

