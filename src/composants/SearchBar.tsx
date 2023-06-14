import Searchbar from "../ComponentsStyles/SearchBar.styled";

const SearchBar = () => {

    return (
        <Searchbar>
            <label>Recherche : </label>
            <input type="search" className="search" id="" />
        </Searchbar>
    )
}

export default SearchBar;