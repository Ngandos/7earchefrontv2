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
import Article from './composants/Article/Article';
import UserProfil from './composants/UserProfil/UserProfil';

function App(): ReactElement {
    
    const [viewCart, setViewCart] = useState(false);

    const [searchResults, setSearchResults] = useState<(ArticleType)[]>([]);

    const handleSearchResults = (results: (ArticleType)[]) => {
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
                        <Route path="/Mon Compte" element={<UserProfil client={{
                            id: 0,
                            nom: '',
                            prenom: '',
                            numCompte: '',
                            commandes: [],
                            adresses: []
                            }}/>
                        }/>
                    </Routes>
                ) : (
                    <div className='Results'>
                        <div className='res'>
                            <h2>Resultats de recherche:</h2>
                        </div>
                        <br/>
                        <div className='rescont'>
                            {searchResults.map((result) => (
                                <Article key = {result.id} 
                                    article = {{
                                        id: 0,
                                        ref: result.ref,
                                        categorie: result.categorie,
                                        prixHT: result.prixHT,
                                        prixTTC: result.prixTTC,
                                        tva: result.tva,
                                        designation: result.designation,
                                        stock: 0,
                                        numerique: false
                                    }} 
                                    dispatch = {
                                        function (): void {
                                            throw new Error('Function not implemented.');
                                        } } 
                                        REDUCER_ACTIONS = {{
                                            ADD: 'ADD',
                                            REMOVE: 'REMOVE',
                                            QUANTITY: 'QUANTITY',
                                            SUBMIT: 'SUBMIT',
                                        }}
                                    inCart={false}                  
                                />
                            ))}
                        </div>
                    </div>
                )}
                <Footer viewCart={false} />
            </div>
        </ArticlesProvider>
    </LivreProvider>
  );
}

export default App;
