import { ReactElement } from 'react';
import { CommandeType } from '../../context/CommandeProvider';
import '../Categorie/Categorie.styled.css';
import '../Categorie/Categorie.styled';

type PropsType = {
    commande: CommandeType,
    id: number,
    contenu: [
        ligneCommande: {
            id: number,
            article: number,
            quantite: number,
        }
    ],
    numComm: number,
    dateComm: Date,
    status: string,
    prixHT: number,
    tva: number,
    prixTTC: number,
  };

const Commande = ({ commande }: PropsType): ReactElement => { 

    const content = (
        
        <div className='wrapper'>
            <div className='cols'>
                <div className='col'>
                    <div className='container'>
                        <div className='front'>
                            <div className='inner'>
                                <span>Recap Commande</span>
                                <p>{"Commande " + commande.numComm}</p>
                                <span className='catName'>
                                    <>{"Date " + commande.dateComm}</>
                                </span>
                            </div>
                        </div>
                        <div className='back'>
                            <div className='inner'>
                                <p>{commande.status}</p>
                                <>
                                    {commande.contenu}
                                </>
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

