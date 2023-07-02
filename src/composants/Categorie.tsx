import { ReactElement } from 'react';
import { CategorieType } from '../context/CategoriesProvider';

type PropsType = {
    categorie: CategorieType;
    nom: string;
    designation: string;
 }

const Categorie = ({ categorie }: PropsType): ReactElement => {
    
    const content = (
        <div className="wrapper">
            <h1>Rechercher par catégories</h1>
            <div className="cols">
                <div className="col">
                    <div className="container">
                        <div className="front">
                            <div className="inner">
                                <p>{categorie.nom}</p>
                                <span>{categorie.designation}</span>
                            </div>
                        </div>
                    </div>
                    <div className="back">
                        <div className="inner">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Alias cum repellat velit quae suscipit c.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    return content
}

export default Categorie;