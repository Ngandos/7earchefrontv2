import { memo } from 'react';
import { Searchbar } from '../ComponentsStyles/SearchBar.styled';

// eslint-disable-next-line react-refresh/only-export-components
const SearchBar = () => {
  return (
    <Searchbar>
      <label>Recherche : </label>
      <input type='search' className='search' id='' />
    </Searchbar>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(SearchBar);

