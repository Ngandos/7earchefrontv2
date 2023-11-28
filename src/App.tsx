import { ReactElement, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './composants/Cart/Cart';
import Header from './composants/Header/Header';
import Footer from './composants/Footer/Footer';
import './App.css';
import MenuNav from './composants/MenuNav/MenuNav';
import CategorieList from './composants/CategorieList/CategorieList';
import ArticleList from './composants/ArticlesList/ArticleList';
import Connexion from './composants/LogIn/Connexion';
import Subscription from './composants/Subscription/Subscription';
import ClientList from './composants/ClientList/ClientList';
import CommandeList from './composants/CommandeList/CommandeList';
import SearchBar from './composants/SearchBar/SearchBar';
import { LivreProvider } from './context/LivreProvider';
import { ArticlesProvider } from './context/ArticleProvider';
import { ArticleType } from './context/ArticleProvider';
import { LivreType } from './context/LivreProvider';

function App(): ReactElement {
    
    const [viewCart, setViewCart] = useState(false);

    const [searchResults, setSearchResults] = useState<(ArticleType | LivreType)[]>([]);

    const handleSearchResults = (results: (ArticleType | LivreType)[]) => {
        if (results) {
            setSearchResults(results);
        } else {
            // Handle error condition, e.g., show an error message
            console.error('Error in search results.');
        }
    };

  const isSearchResultsEmpty = searchResults.length === 0;

  return (
    <LivreProvider>
      <ArticlesProvider>
        <div className="MainArea">
        <Header viewCart={viewCart} setViewCart={setViewCart} />
          <div className="middle">
            <MenuNav />
            <SearchBar onSearchResults={(results) => handleSearchResults(results)} />
          </div>
          {isSearchResultsEmpty && <CategorieList />}
          {isSearchResultsEmpty ? (
            <Routes>
              <Route path="/" element={<ArticleList />} />
              <Route path="/Categorie" element={<CategorieList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/CréerUnCompte" element={<Subscription />} />
              <Route path="/connexion" element={<Connexion />} />
              <Route path="/Client" element={<ClientList />} />
              <Route path="/Commande" element={<CommandeList />} />
              {/* Add more routes as needed */}
            </Routes>
          ) : (
            <div>
              <h2>Search Results:</h2>
              {searchResults.map((result) => (
                <div key={result.id}>
                  <p>{'titre' in result ? result.titre : result.designation}</p>
                  {/* Include other relevant information based on the type */}
                </div>
              ))}
            </div>
          )}
          <Footer viewCart={false} />
        </div>
      </ArticlesProvider>
    </LivreProvider>
  );
}

export default App;
