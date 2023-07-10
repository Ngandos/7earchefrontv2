import useCategories from "../hooks/useCategorie";
import { ReactElement } from "react";
import Categorie from "";
import '../ComponentsStyles/ArticleList.css';

const CategorieList = () => {

    const { Categories } = useCategories()

    let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

    if (Categories?.length) {
        pageContent = Categories.map(categorie => {

            return (
                <Categorie
                    id = {categorie.id}
                    categorie = { categorie }
                    nom = { categorie.nom }
                    description = { categorie.description }
                />
            )
        })
    }
    const content = (
        <main className="main main--categorie">
            { pageContent }
        </main>
    )
    return content
}

export default CategorieList;