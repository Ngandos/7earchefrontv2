import { ReactElement } from 'react';
import { CommandeType } from '../../context/CommandeProvider';
import '../Categorie/Categorie.styled.css';
import '../Categorie/Categorie.styled';
import Commande from '../Commande/Commande';
import useCommande from '../../hooks/useCommande';

const CommandeList = () => {

    const {commande} = useCommande();

    let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

    if (commande?.length) {

        pageContent = commande.map((commande: CommandeType) => {

            return (

                <Commande
                    commande={commande}
                    id={commande.id}
                    contenu={[]}
                    numComm={commande.numComm}
                    dateComm={commande.dateComm}
                    status={commande.status}
                />

            );
        });
    }

    const content = 
    
        <main className='main main--commandeList'>
            {pageContent}
        </main>;

  return content;
 
};

export default CommandeList;