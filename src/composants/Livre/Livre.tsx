import { ReactElement } from 'react';
import { LivreType } from '../../context/LivreProvider';

type PropsType = {
  livre: LivreType;
};

const Livre = ({ livre }: PropsType): ReactElement => {
    
  const { id, titre, auteur, editeur } = livre;

  const content = (
    <div className='wrapper'>
      <div className='cols'>
        <div className='col'>
          <div className='container'>
            <div className='front'>
              <div className='inner'>
                <p>{id}</p>
                <span className='catName'>
                  <strong><p>{titre}</p></strong>
                </span>
              </div>
            </div>
            <div className='back'>
              <div className='inner'>
                <p>{auteur}</p>
                <p>{editeur}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return content;
};

export default Livre;
