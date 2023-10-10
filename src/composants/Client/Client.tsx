import { ReactElement } from 'react';
import { ClientType } from '../../context/ClientProvider';

type PropsType = {
  client: ClientType;
  id:number;
  nom: string;
  prenom: string;
  numCompte: string;
  nbCommandes: number;
};

const Client = ({ client }: PropsType): ReactElement => {

  const content = (
    <div className='wrapper'>
      <h1>{client.nom}</h1>
      <div className='cols'>
        <div className='col'>
          <div className='container'>
            <div className='front'>
              <div className='inner'>
                <p>{client.id}</p>
                <span className='cliName'>
                  <p>{client.prenom}</p>
                </span>
              </div>
            </div>
            <div className='back'>
              <div className='inner'>
                <p>{}</p>
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

