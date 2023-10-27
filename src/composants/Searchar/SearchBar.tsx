import Searchbar from "./SearchBar.styled";

const placeholderStatus = "Rechercher par Categorie, Articles, Livres, Auteurs, Editeurs...";

const SearchBar = () => {

    return (
        <Searchbar>
            <label className="searchLab" htmlFor="search">
                <p className="seaLabText">Effectuer une recherche sur 7éArche :</p>
            </label>
            <input type="search" className="search" placeholder={placeholderStatus} id="search"/>
        </Searchbar>
    )
}

export default SearchBar;