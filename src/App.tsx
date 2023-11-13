import { useState } from 'react';
import Cart from './composants/Cart/Cart';
import Header from './composants/Header/Header';
import Footer from './composants/Footer/Footer';
import './App.css';
import MenuNav from './composants/MenuNav/MenuNav';
import CategorieList from './composants/CategorieList/CategorieList';
import { Routes, Route } from 'react-router-dom';
import ArticleList from './composants/ArticlesList/ArticleList';
import Connexion from './composants/LogIn/Connexion';
import Subscription from './composants/Subscription/Subscription';
import ClientList from './composants/ClientList/ClientList';
import CommandeList from './composants/CommandeList/CommandeList';
import SearchBar from './composants/SearchBar/SearchBar'
// import ArticlePage from './composants/Pages/ArticlePage/ArticlePage';


function App() {

    const [viewCart, setViewCart] = useState(false);

    const pageContent = <Routes />;

    const content = (

        <div className='MainArea'>
            <Header viewCart={viewCart} setViewCart={setViewCart} />
            <div className='middle'>
                <MenuNav />
                <SearchBar />
            </div>
            <CategorieList/>
            {pageContent}
            <Routes>
                <Route path = '/' element = {<ArticleList />} />
                {/* <Route path= '/Article/:id' element={<ArticlePage />} /> */}
                <Route path = '/categorie' element = {<CategorieList />} />
                <Route path = '/cart' element = {<Cart />} />
                <Route path = '/CréerUnCompte' element = {<Subscription />} />
                <Route path = '/connexion' element = {<Connexion />} />
                <Route path = '/Client' element = {<ClientList/>}/>
                <Route path = '/Commande' element = {<CommandeList/>}/>
            </Routes>
            <Footer viewCart={false} />
        </div>
    );

    return content;
}

export default App;

