import { ReactElement } from "react";
import useCategories from "../hooks/useCategories";
import Categorie from "./Categorie";

const CategorieList = () => {



    const { Categories } = useCategories()

    let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

    if (Categories?.length) {
        pageContent = Categories.map(categorie  => {
            return (
                <Categorie
                    key = {categorie.id}
                    categorie = { categorie }
                    nom = { categorie.nom }
                    designation = { categorie.designation }
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