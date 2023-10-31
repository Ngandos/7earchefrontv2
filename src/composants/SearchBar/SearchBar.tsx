import searchIcon from "../../../public/Img/SearchBarIcons/SearchIcons.svg"
import searchDelete from "../../../public/Img/SearchBarIcons/Deleteicon.svg"
import { useState } from "react";
import { Searchbar, SearchbarContainerInput } from "./SearchBar.styled";
import useArticles from "../../hooks/useArticle";
import useCategories from "../../hooks/useCategorie";



const placeholderStatus = "Rechercher par Categorie, Articles, Livres, Auteurs, Editeurs...";

const SearchBar = () => {

    return (
        <Searchbar>
            <label className="searchLab">
                <p className="seaLabText">Effectuer une recherche sur 7éArche :</p>
            </label>
            <SearchBarInput />
        </Searchbar>
    )
}

export default SearchBar;

const SearchBarInput = () => {

  const searchbarSelect = 'searchBarSelect'

  const { articles } = useArticles();

  const { Categories } = useCategories();

  const [searchbarPlaceholder, setSearchbarPlaceHolder] = useState(placeholderStatus);

  const [searchbarInputValue, setSearchbarInputValue] = useState('');

  const [isSearchbarInputHasValue, setIsSearchbarInputHasValue] = useState(false);

  const handleOnFocusSearchbarInput = () => {
    setSearchbarPlaceHolder("")
  }

  const handleOnBlurSearchbarInput = () => {
    setSearchbarPlaceHolder(placeholderStatus)
  }

  const handleOnClickDeleteSearchQuery = () => {
    setSearchbarInputValue("")
    setIsSearchbarInputHasValue(false)
  }

  const handleOnChangeSearchbarInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    setSearchbarInputValue(searchQuery)
    searchQuery.length ? setIsSearchbarInputHasValue(true) : 
      setIsSearchbarInputHasValue(false)
  }

  return (
    <SearchbarContainerInput>
      <input
        value={searchbarInputValue}
        onChange={handleOnChangeSearchbarInput}
        onFocus={handleOnFocusSearchbarInput}
        onBlur={handleOnBlurSearchbarInput}
        list={searchbarSelect}
        className="searchbar_input"
        type="text"
        placeholder={searchbarPlaceholder}
        role={"SearchBarInput"} />

    {isSearchbarInputHasValue
        ? <img src={searchDelete} onClick={handleOnClickDeleteSearchQuery} alt='Icon search' />
        : <img src={searchIcon} alt='Icon search' />
    }

    <datalist id={searchbarSelect}>
        {articles.map(( article ) =>
            <option key={article.id} value={article.nom} tabIndex={0} />
        )}
        {Categories.map(( categorie ) =>
            <option key={categorie.id} value={categorie.nom} />
        )}
    </datalist>
    </SearchbarContainerInput>
  )
}