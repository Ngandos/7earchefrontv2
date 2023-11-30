// Import necessary dependencies and types
import React, { useState } from 'react';
import Searchbar from "./SearchBar.styled";
import { LivreType } from '../../context/LivreProvider';
import { useNavigate } from 'react-router-dom';
// import SearchResults from '../SearchResults/SearchResults';

interface SearchBarProps {
  onSearchResults: (results: LivreType[]) => void;
}

const placeholderStatus = 'Rechercher un livre par son titre ...';

const SearchBar: React.FC<SearchBarProps> = ({ onSearchResults }) => {

    const [query, setQuery] = useState<string>('');

    const [searchResults, setSearchResults] = useState<LivreType[]>([]);

    const [loading, setLoading] = useState<boolean>(false);

    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSearch = async () => {

        try {
            setLoading(true);
            setError(null);
    
            const apiUrl = `http://localhost:8080/demo/articles/search?designation=${encodeURIComponent(query)}`;

            console.log('API URL:', apiUrl);
    
            const response = await fetch(apiUrl);
            console.log('Response:', response);
    
            if (response.ok) {
                const data = await response.json();
                console.log('Data:', data);
                setSearchResults(data);
                onSearchResults(data);
            } else {
                setError('Aucun livre ne correspond a la recherche');
            }
        } catch (error) {
            console.error('Erreur lors de la recherche:', error);
            setError('Erreur lors de la recherche. Saisissez a nouveau une recherhe.');
        } finally {
            setLoading(false);
        }
    };

    const handleResultClick = (result: LivreType) => {
        console.log('Clicked on result:', result);
        const route = `/livres/${result.id}`;
        navigate(route);
    };

    const handleBlur = () => {
        if (searchResults.length === 1) {
            handleResultClick(searchResults[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSearch();
    };

    return (
        <Searchbar>
            <form onSubmit={handleSubmit}>
                <label className="searchLab" htmlFor="search">
                    <p className="seaLabText">Effectuer une recherche sur 7éArche :</p>
                </label>
                <input
                    type="search"
                    className="search"
                    placeholder={placeholderStatus}
                    id="search"
                    aria-label="Search for livres by titre"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onBlur={handleBlur}
                    list="searchOptions"
                />
                <datalist className="searchOptions">
                    {searchResults.map((result) => (
                        <option key={`searchOption-${result.id}`} value={result.titre} />
                    ))}
                </datalist>
                <button type="submit" disabled={loading}>
                    {loading ? 'Recherche en cours...' : 'Recherche'}
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

        </Searchbar>
    );
};

export default SearchBar;
