import { ReactElement } from 'react';
import { ClientType } from '../../context/ClientProvider';
import '../Client/Client.styled.css'


type PropsType = {
  client: ClientType;
  id:number;
  adresses: string;
  nom: string;
  prenom: string;
  numCompte: string;
  commandes: [];
}

const Client = ({ client }: PropsType): ReactElement => {


  const content = (
    <div className='wrapper'>
      <div className='cols'>
        <div className='col'>
          <div className='container'>
            <div className='front'>
              <div className='inner'>
                <p>{client.nom}</p>
                <span className='cliName'>
                  <p>{client.prenom}</p>
                </span>
              </div>
            </div>
            <div className='back'>
              <div className='inner'>
                <p>{client.commandes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return content;
};

export default Client;

