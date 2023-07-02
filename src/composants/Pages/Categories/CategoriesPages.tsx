import { ReactElement } from "react";
import { CategorieType } from "../../../context/CategoriesProvider";
import Categorie from "./CategoriePage.styled";
import './CategoriesPage.css';

type PropsType = {
   categorie: CategorieType;
   nom: string;
   designation: string;
}

const CategoriePage = ({categorie}: PropsType): ReactElement => {

   return (
      <Categorie>
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
            <div className="col">
               <div className="container">
                  <div className="front">
                     <div className="inner">
                        <p>{categorie.nom}</p>
                        <span>{categorie.designation}</span>
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
            <div className="col">
               <div className="container">
                  <div className="front">
                     <div className="inner">
                        <p>{categorie.nom}</p>
                        <span>{categorie.designation}</span>
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
            <div className="col">
               <div className="container">
                  <div className="front">
                     <div className="inner">
                        <p>{categorie.nom}</p>
                        <span>{categorie.designation}</span>
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
            <div className="col">
               <div className="container">
                  <div className="front">
                     <div className="inner">
                        <p>{categorie.nom}</p>
                        <span>{categorie.designation}</span>
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
            <div className="col">
               <div className="container">
                  <div className="front">
                     <div className="inner">
                        <p>{categorie.nom}</p>
                        <span>{categorie.designation}</span>
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
            <div className="col">
               <div className="container">
                  <div className="front">
                     <div className="inner">
                        <p>{categorie.nom}</p>
                        <span>{categorie.designation}</span>
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
            <div className="col">
               <div className="container">
                  <div className="front">
                     <div className="inner">
                        <p>{categorie.nom}</p>
                        <span>{categorie.designation}</span>
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
      </Categorie>
   )
}

export default CategoriePage;