import Searchbar from './SearchBar.styled';

const placeholderStatus =
	'Rechercher par Categorie, Articles, Livres, Auteurs, Editeurs...';

const SearchBar = () => {
	return (
		<Searchbar>
			<label className='searchLab'>
				<p className='seaLabText'>Effectuer une recherche sur 7éArche :</p>
			</label>
			<input type='search' className='search' placeholder={placeholderStatus} />
		</Searchbar>
	);
};

export default SearchBar;

