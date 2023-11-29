import { ReactElement } from 'react';
import useLivre from '../../hooks/useLivre';
import { LivreType } from '../../context/LivreProvider';
import Livre from '../Livre/Livre';

const LivresList = () => {

    const { livres } = useLivre(); // Update property name to 'livres'

    let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

    if (livres?.length) {
        pageContent = livres.map((livre: LivreType) => {
            return <Livre key={livre.id} livre={livre} />;
        });
    }

    const content = <main className='main main--livre'>{pageContent}</main>;

    return content;
};

export default LivresList;
