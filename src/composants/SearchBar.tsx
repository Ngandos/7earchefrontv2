import {
  Searchbar,
  SearchbarContainerInput,
  SearchbarLabel,
} from '../ComponentsStyles/SearchBar.styled';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  InputArticleData,
  InputAuteurData,
  InputCategorieData,
  InputEditeurData,
} from '../types';
import { Context as SearchContext } from '../Store/SearchResults';
import DataContext from '../Store/DataContext';
import { ISearchContext } from '../Store/DataContextType';
import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  debounce,
  formatArticlesDataForInput,
  formatAuteursDataForInput,
  formatCategoriesDataForInput,
  formatEditeursDataForInput,
  getItemSecondaryClass,
  sortByRelevanceArt,
  sortByRelevancesAut,
  sortByRelevancesCat,
  sortByRelevancesEdi,
} from '../Store/search';

// eslint-disable-next-line react-refresh/only-export-components
function SearchBarInput() {
  const data = useContext(DataContext);

  const {
    state: { currentSearch, searchResults },
    setCurrentSearch,
    setSearchResults,
  } = useContext<ISearchContext>(SearchContext);

  const [articles, setArticles] = useState<InputArticleData[]>([]);
  const [categories, setCategories] = useState<InputCategorieData[]>([]);
  const [auteurs, setAuteurs] = useState<InputAuteurData[]>([]);
  const [editeurs, setEditeurs] = useState<InputEditeurData[]>([]);
  const PlaceHolderStatus = 'Titre, Auteur, Editeur, Categorie...';

  const [searchbarPlaceHolder, setSearchbarPlaceHolder] =
    useState(PlaceHolderStatus);

  const [shouldBeOpen, setShouldBeOpen] = useState(true);
  const [shouldSetResults, setShouldSetResults] = useState(true);
  const [IsSearchbarInputHasValue, setIsSearchbarInputHasValue] =
    useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { article, auteur, categorie, editeur } = data;

  const isSearchPage = location.pathname === '/search/';

  const filteredArticles = useMemo(
    () =>
      articles
        .filter((item: InputArticleData) =>
          item.nom.toLowerCase().includes(currentSearch.toLowerCase()),
        )
        .sort((a, b) => a.nom.toLowerCase().length - b.nom.toLowerCase().length)
        .sort(sortByRelevanceArt(currentSearch)),
    [articles, currentSearch],
  );

  const filteredCategories = useMemo(
    () =>
      categories
        .filter((categorie: InputCategorieData) =>
          categorie.nom.toLowerCase().includes(currentSearch.toLowerCase()),
        )
        .sort((a, b) => a.nom.toLowerCase().length - b.nom.toLowerCase().length)
        .sort(sortByRelevancesCat(currentSearch)),
    [categories, currentSearch],
  );

  const filteredAuteurs = useMemo(
    () =>
      auteurs
        .filter((auteur: InputAuteurData) =>
          auteur.nom.toLowerCase().includes(currentSearch.toLowerCase()),
        )
        .sort((a, b) => a.nom.toLowerCase().length - b.nom.toLowerCase().length)
        .sort(sortByRelevancesAut(currentSearch)),
    [auteurs, currentSearch],
  );

  const filteredEditeurs = useMemo(
    () =>
      editeurs
        .filter((editeur: InputEditeurData) =>
          editeur.enseigne.toLowerCase().includes(currentSearch.toLowerCase()),
        )
        .sort(
          (a, b) =>
            a.enseigne.toLowerCase().length - b.enseigne.toLowerCase().length,
        )
        .sort(sortByRelevancesEdi(currentSearch)),
    [editeurs, currentSearch],
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
  }, [setCurrentSearch, setIsSearchbarInputHasValue]);

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
      ? setIsSearchbarInputHasValue(true)
      : setIsSearchbarInputHasValue(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleKeyDown = (event: any) => {
    if (event.target && event.key === 'Enter') {
      const link = event?.target?.firstChild?.href?.split('/');
      const slug = link?.slice(link.length - 2);
      navigate(`/${slug[0]}/${slug[1]}`);
      handleReset();
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputKeyDown = (event: any) => {
    if (event.target && event.key === 'Enter') {
      if (event.target.value.lenght > 1) {
        setCurrentSearch(event.target.value);
        setSearchResults({
          articles: filteredArticles,
          auteurs: filteredAuteurs,
          categories: filteredCategories,
          editeurs: filteredEditeurs,
        });
        handleReset();
        navigate(`/search/?q=${event.target.value}`, {
          state: {
            articles: filteredArticles,
            auteurs: filteredAuteurs,
            categories: filteredCategories,
            editeurs: filteredEditeurs,
          },
        });
      }
    }
  };

  const hasResults =
    filteredArticles.length > 0 &&
    filteredAuteurs.length > 0 &&
    filteredCategories.length > 0 &&
    filteredEditeurs.length > 0;

  const hasPartialResults =
    filteredArticles.length > 0 &&
    filteredAuteurs.length > 0 &&
    filteredCategories.length > 0 &&
    filteredEditeurs.length > 0;

  const hasValidSearch = currentSearch && currentSearch.length > 1;

  useEffect(() => {
    if (articles.length === 0 && articles.length > 0) {
      const articlesForInput = formatArticlesDataForInput(article);
      setArticles(articlesForInput);
    }
  }, [article, articles.length]);

  useEffect(() => {
    if (categories.length === 0 && categories.length > 0) {
      const categoriesForInput = formatCategoriesDataForInput(categorie);
      setCategories(categoriesForInput);
    }
  }, [categorie, categories.length]);

  useEffect(() => {
    if (auteurs.length === 0 && auteurs.length > 0) {
      const auteursForInput = formatAuteursDataForInput(auteur);
      setAuteurs(auteursForInput);
    }
  }, [auteur, auteurs.length]);

  useEffect(() => {
    if (editeurs.length === 0 && editeurs.length > 0) {
      const editeursForInput = formatEditeursDataForInput(editeur);
      setEditeurs(editeursForInput);
    }
  }, [editeur, editeurs.length]);

  useEffect(() => {
    if (isSearchPage) {
      setShouldBeOpen(true);
    }

    if (isSearchPage) {
      setShouldBeOpen(false);
      if (currentSearch.length === 0 && !hasPartialResults) {
        if (isSearchPage && shouldSetResults) {
          setTimeout(() => {
            setSearchResults({
              articles: filteredArticles,
              auteurs: filteredAuteurs,
              categories: filteredCategories,
              editeurs: filteredEditeurs,
            });
            setShouldSetResults(false);
          }, 4000);
        }
        if (!isSearchPage) {
          setSearchResults({
            articles: filteredArticles,
            auteurs: filteredAuteurs,
            categories: filteredCategories,
            editeurs: filteredEditeurs,
          });
        }
      }
    }
  }, [
    location,
    hasResults,
    hasValidSearch,
    hasPartialResults,
    filteredArticles,
    filteredAuteurs,
    filteredCategories,
    filteredEditeurs,
    currentSearch.length,
    searchResults,
    isSearchPage,
    setSearchResults,
    setCurrentSearch,
    handleReset,
    shouldSetResults,
  ]);

  return (
    <SearchbarContainerInput
      hasValidSearch={hasValidSearch}
      filteredArticles={hasResults}
      filteredAuteurs={hasResults}
      filteredCategories={hasResults}
      filteredEditeurs={hasResults}
      setShouldBeOpen={shouldBeOpen}>
      <div className='input-wrapper'>
        <input
          className='searchbar-input'
          type='search'
          value={currentSearch}
          onChange={handleOnChangeSearchbarInput}
          onFocus={handleOnFocusSeachbarInput}
          onBlur={handelOnBlurSearchbarInput}
          onKeyDown={handleInputKeyDown}
          placeholder={searchbarPlaceHolder}
        />
        {IsSearchbarInputHasValue ? (
          <button type='button' onClick={handleReset}>
            <img src={'/images/Icons/system-search.svg'} alt='icon search' />
          </button>
        ) : (
          <img src={'/images/Icons/system-search.svg'} alt='Icon Search' />
        )}
      </div>

      {shouldBeOpen && hasValidSearch && hasResults && (
        <div className='options-wrapper'>
          <span className='separator' />
          <ul className='options'>
            {filteredArticles.length > 0 && (
              <div className='title'>Articles</div>
            )}
            {filteredArticles.map(
              (articles: InputArticleData, index: number) => (
                <li
                  className={`option ${getItemSecondaryClass(
                    filteredArticles.length,
                    index,
                  )}
                    `}
                  aria-label='article'
                  key={articles.id}
                  tabIndex={0}
                  role='option'
                  aria-selected='true'
                  onKeyDown={handleKeyDown}>
                  <Link to={articles.nom} onClick={handleReset}>
                    {articles.nom}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      )}

      {shouldBeOpen && hasValidSearch && hasResults && (
        <div className='options-wrapper'>
          <span className='separator' />
          <ul className='options'>
            {filteredCategories.length > 0 && (
              <div className='title'>Categorie</div>
            )}
            {filteredCategories.map(
              (categorie: InputCategorieData, index: number) => (
                <li
                  className={`option ${getItemSecondaryClass(
                    filteredCategories.length,
                    index,
                  )}
                    `}
                  aria-label='categorie'
                  key={categorie.id}
                  tabIndex={0}
                  role='option'
                  aria-selected='true'
                  onKeyDown={handleKeyDown}>
                  <Link to={categorie.nom} onClick={handleReset}>
                    {categorie.nom}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      )}

      {shouldBeOpen && hasValidSearch && hasResults && (
        <div className='options-wrapper'>
          <span className='separator' />
          <ul className='options'>
            {filteredAuteurs.length > 0 && <div className='title'>Auteurs</div>}
            {filteredAuteurs.map((auteur: InputAuteurData, index: number) => (
              <li
                className={`option ${getItemSecondaryClass(
                  filteredAuteurs.length,
                  index,
                )}
                    `}
                aria-label='auteur'
                key={auteur.id}
                tabIndex={0}
                role='option'
                aria-selected='true'
                onKeyDown={handleKeyDown}>
                <Link to={auteur.nom} onClick={handleReset}>
                  {auteur.nom}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {shouldBeOpen && hasValidSearch && hasResults && (
        <div className='options-wrapper'>
          <span className='separator' />
          <ul className='options'>
            {filteredEditeurs.length > 0 && (
              <div className='title'>Editeurs</div>
            )}
            {filteredEditeurs.map(
              (editeur: InputEditeurData, index: number) => (
                <li
                  className={`option ${getItemSecondaryClass(
                    filteredEditeurs.length,
                    index,
                  )}
                    `}
                  aria-label='editeur'
                  key={editeur.id}
                  tabIndex={0}
                  role='option'
                  aria-selected='true'
                  onKeyDown={handleKeyDown}>
                  <Link to={editeur.enseigne} onClick={handleReset}>
                    {editeur.enseigne}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </SearchbarContainerInput>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
const SearchBar = () => {
  return (
    <Searchbar>
      <SearchbarLabel>Recherche : </SearchbarLabel>
      <SearchBarInput />
    </Searchbar>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(SearchBar);

