import { ReactElement } from 'react';
import { CommandeType } from '../../context/CommandeProvider';
import '../Categorie/Categorie.styled.css';
import '../Categorie/Categorie.styled';

type PropsType = {
    commande: CommandeType,
    id: number,
    numComm: string;
    dateComm: Date;
    ligneCommande: [],
  };

const Commande = ({ commande }: PropsType): ReactElement => { 

  const content = (
    <div className='wrapper'>
      <div className='cols'>
        <div className='col'>
          <div className='container'>
            <div className='front'>
              <div className='inner'>
                <span>{}</span>
                <p>{"Commande " + commande.numComm}</p>
                <span className='catName'>
                  <>{commande.dateComm}</>
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

export default Commande;

