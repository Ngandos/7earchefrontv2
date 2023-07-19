import { ReactElement } from 'react';
import { CategorieType } from '../context/CategorieProvider';
import '../ComponentsStyles/Categorie.styled.css';

type PropsType = {
    categorie: CategorieType;
    nom: string;
    designation: string;
 }

const Categorie = ({ categorie }: PropsType): ReactElement => {
    
    const content = (
        <div className="wrapper">
            <h1>{categorie.nom}</h1>
            <div className="cols">
                <div className="col">
                    <div className="container">
                        <div className="front">
                            <div className="inner">
                                <p>{categorie.id}</p>
                                <span>{categorie.nom}</span>
                            </div>
                        </div>
                    </div>
                    <div className="back">
                        <div className="inner">
                            <p>{categorie.designation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    return content
}

export default Categorie;