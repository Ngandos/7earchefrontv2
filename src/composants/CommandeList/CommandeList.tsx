import { ReactElement } from 'react';
import './CommandeList.styled.css';
import Commande from '../Commande/Commande';
import useCommande from '../../hooks/useCommande';


const CommandeList = () => {

    const {commande} = useCommande();

    let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

    if (commande?.length) {

        pageContent = commande.map((singleCommande) => {

            return (

                <Commande
                    key={singleCommande.id} // Add this key prop
                    commande={singleCommande}
                    id={singleCommande.id}
                    contenu={singleCommande.contenu}
                    numComm={singleCommande.numComm}
                    dateComm={singleCommande.dateComm}
                    status={singleCommande.status} 
                    prixHT={singleCommande.prixHT} 
                    tva={singleCommande.tva} 
                    prixTTC={singleCommande.prixTTC}                
                />
            );
        });
    }

    const content = 
    
        <main className='commandeList'>
            {pageContent}
        </main>;

  return content;
 
};

export default CommandeList;