import {Searchbar, SearchbarContainerInput, SearchbarLabel } from "../ComponentsStyles/SearchBar.styled";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { InputArticleData, InputAuteurData, InputCategorieData, InputEditeurData } from "../types";
import DataContext from "../Store/DataContext";
import { ISearchContext } from '../Store/DataContextType'
import { memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { debounce, formatArticlesDataForInput, getItemSecondaryClass, sortByRelevance } from "../Store/search";

function SearchBarInput(){
    
    const data = useContext(DataContext);
    const {
        state: { currentSearch, SearchResults }, 
        setCurrentSearch, 
        setSearchResults, 
    } = useContext<ISearchContext>(SearchContext);

    const [articles, setArticles] = useState<InputArticleData[]>([]);
    const [categories, setCategories] = useState<InputCategorieData[]>([]);
    const [auteurs, setAuteurs] = useState<InputAuteurData[]>([]);
    const [editeurs, setEditeurs] = useState<InputEditeurData[]>([]);
    const PlaceHolderStatus = 'Titre, Auteur, Editeur, Categorie';

    const [sarchbarPlaceHolder, setSearchbarPlaceHolder] = useState(PlaceHolderStatus)

    const navigate = useNavigate();
    const location = useLocation();

    const { article, categorie, auteur, editeur } = data;

    const isSearchPage = location.pathname === '/search/';

    const filteredArticles = useMemo(() => 
        articles.filter((item: InputArticleData) =>
            item.nom.toLowerCase()
            .includes((currentSearch.toLowerCase())),)
            .sort(a, b) => 
            a.nom.toLowerCase().length - 
            b.nom.toLowerCase().length,
            .sort(sortByRelevance(currentSearch)), [articles, currentSearch],
    );

    // BEHAVIOR

    const handleOnFocusSeachbarInput = () => {
        setSearchbarPlaceHolder('');
    };
    const handelOnBlurSearchbarInput = () => {
        setSearchbarPlaceHolder(PlaceHolderStatus);
    };
    const handleReset = useCallback(() => {
    setCurrentSearch('');
    setIsSearchbarInputHasValue(false);
}, [setCurrentSearch, setIsSearchInputHasValue]);

const handleOnChangeSearchbarInput = (
    event: React.ChangeEvent<HTMLInputElement>,
) => {
    const searchQuery = event.target.value;

    if (isSearchPage) {
        debounce(setCurrentSearch(searchQuery), 200);
    }

    if (!isSearchPage) {
        setCurrentSearch(searchQuery);
    }
    return currentSearch.length 
        ? setIsSearchbarHasInputValue(true)
        : setIsSearchbarHasInputValue(false);
};

const handleKeyDown = (event: any) => {
    if (event.target && event.key === 'Enter') {
        const link = event?.target?.firstChild?.href?.split('/');
        const slug = link?.slice(link.length - 2);
        navigate(`/${slug[0]}/${slug[1]}`);
        handleReset();
    }
};

const handleInputKeyDown = (event: any) => {
    if (event.target && event.key ===  'Enter') {
        if (event.target.value.lenght > 1) {
            setCurrentSearch(event.target.value);
            setSearchResults({
                article: filteredArticles,
            });
            handleReset();
            navigate(`/search/?q=${event.target.value}`, {
                state: {
                    articles: filteredArticles,
                },
            });
        }
    }
};

const hasResults = filteredArticles.length > 0;

const hasPartialResults = filteredArticles.length > 0;

const hasValidSearch = currentSearch && currentSearch.length > 1;

useEffect(() => {
    if (articles.length === 0 && articlesData.length > 0) {
        const articlesForInput = formatArticlesDataForInput(articlesData);
        setArticles(articlesForInput);
    }
}, [articles.length]);

useEffect(() => {
    if (isSearchPage) {
        setShouldBeOpen(true);
    }
    if (isSearchPage) {
        const searchQuery = new URLSearchParams(location.search).get('q') ?? '';
        setShouldBeOpen(false);

        if (currentSearch.length === 0 && !hasPartialResults) {
            if (isSearchPage && shouldSetResults) {
                setTimeout(() => {
                    setSearchResults({
                        articles: filteredArticles,
                        auteurs: [],
                        categorie: [],
                        editeurs: []
                    });
                    setShouldSetResults(false);
                }, 4000);
            }

            if (!isSearchPage) {
                setSearchResults({
                    articles: filteredArticles,
                    auteurs: [],
                    categorie: [],
                    editeurs: []
                });
            }
        }
    }
}, [
    location, hasResults, hasPartialResults, filteredArticles, currentSearch.length, 
    searchResults, isSearchPage, shouldSetResults, setSearchResults, setCurrentSearch,
    handleReset,
]);

return (
    <SearchbarContainerInput
        hasValidSearch={hasValidSearch}
        filteredArticles={hasResults}
        setShouldBeOpen={shouldBeOpen}
    >
        <div className="input-wrapper">
            <input className="searchbar-input"
            type="search"
            value={currentSearch}
            onChange={handleOnChangeSearchbarInput}
            onFocus={handleOnFocusSeachbarInput}
            onBlur={handelOnBlurSearchbarInput}
            onKeyDown={handleInputKeyDown}
            placeholder={searchbarPlaceHolder}
        />
            {
            isSearchbarInputHasValue ? (
                <button type="button" onClick={handleReset}>
                    <img src={} alt= "icon search"/>
                </button>
            ) : (
                <img src={searchIcon} alt="Icon Search"/>
            )} 
        </div>

        {shouldBeOpen && hasValidSearch && hasResults && (
            <div className="options-wrapper">
                <span className="separator"/>
                <ul className="options">
                    {filteredArticles.length > 0 && <div className="title">Articles</div>}
                    {filteredArticles.map((article: InputArticleData, index: number) => (
                        <li className={`option ${getItemSecondaryClass(filteredArticles.length, index,)}
                    `}
                    aria-label="article"
                    key={articles.id}
                    tabIndex={0}
                    role="option"
                    aria-selected="true"
                    onKeyDown={handleKeyDown}
                    >
                        <Link to={} onClick={handleReset}>
                            {article.nom}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
            )}
    </SearchbarContainerInput>
    );
}

const SearchBar = () => {

    return (
        <Searchbar>
            <SearchbarLabel>Recherche : </SearchbarLabel>
            <SearchBarInput/>
        </Searchbar>
    )
}

export default memo(SearchBar);