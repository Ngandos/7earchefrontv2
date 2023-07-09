import { ReactElement } from "react";
import CategorieCard from "../ComponentsStyles/Categorie.styled";
import { CategorieType } from "../context/CategoriesProvider";

type PropsType = {
    categorie: CategorieType;
    id: number;
    nom: string;
    description: string;
}

const Categorie = ({ categorie }: PropsType):ReactElement => {

    const content = (
        <CategorieCard>
            <div className="wrapper">
                <h1>{categorie.nom}</h1>
                <div className="cols">
                    <div className="col">
                        <div className="container">
                            <div className="front">
                                <div className="inner">
                                    <p>{categorie.id}</p>
                                    <h4>{categorie.nom}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>{categorie.description}</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </CategorieCard>
    )
        return content
}
    

export default Categorie;