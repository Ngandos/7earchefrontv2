import { CommandeType } from '../../context/CommandeProvider';
import './Commande.styled.css';

type LigneCommandeType = {
  id: number;
  article: number;
  quantite: number;
};

type PropsType = {
  commande: CommandeType;
  id: number;
  contenu: LigneCommandeType[];
  numComm: number;
  dateComm: Date;
  status: string;
  prixHT: number;
  tva: number;
  prixTTC: number;
};

const Commande: React.FC<PropsType> = ({ numComm, dateComm, status, contenu, /* other props */ }) => {

  const content = (
    <div className='wrapper'>
      <div className='cols'>
        <div className='col'>
          <div className='container'>
            <div className='front'>
              <div className='inner'>
                <span>Recap Commande</span>
                <p>{"Commande " + numComm}</p>
                <span className='catName'>
                  <p>{"Date " + dateComm.toString()}</p>
                </span>
              </div>
            </div>
            <div className='back'>
              <div className='inner'>
                <p>{status}</p>
                {contenu.map((item) => (
                  <div key={item.id}>
                    <p>{`Article: ${item.article}, Quantite: ${item.quantite}`}</p>
                  </div>
                ))}
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
