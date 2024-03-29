import { ReactElement } from 'react';
import { CategorieType } from '../context/CategorieProvider';
import '../ComponentsStyles/Categorie.styled.css';

type PropsType = {
  categorie: CategorieType;
  nom: string;
  description: string;
};

const Categorie = ({ categorie }: PropsType): ReactElement => {
  const content = (
    <div className='wrapper'>
      <h1>{categorie.nom}</h1>
      <div className='cols'>
        <div className='col'>
          <div className='container'>
            <div className='front'>
              <div className='inner'>
                <p>{categorie.id}</p>
                <span className='catName'>
                  <p>{categorie.nom}</p>
                </span>
              </div>
            </div>
            <div className='back'>
              <div className='inner'>
                <p>{categorie.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return content;
};

export default Categorie;

