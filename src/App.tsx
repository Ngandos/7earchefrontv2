import { useState } from 'react';
import Cart from './composants/Cart/Cart';
import Header from './composants/Header/Header';
import Footer from './composants/Footer/Footer';
import SearchBar from './composants/SearchBar/SearchBar';
import './App.css';
import MenuNav from './composants/MenuNav/MenuNav';
import CategorieList from './composants/CategorieList/CategorieList';
import { Routes, Route } from 'react-router-dom';
import ArticleList from './composants/ArticleList/ArticleList';
import Connexion from './composants/LogIn/Connexion';
import Subscription from './composants/Subscription/Subscription';
import UserProfil from './composants/UserProfil/UserProfil';

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
      <Routes>
        <Route path='/' element={<ArticleList />} />
        <Route path='/categorie' element={<CategorieList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/CréerUnCompte' element={<Subscription />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/monCompte' element={<UserProfil />} />
      </Routes>
      {pageContent}
      <Footer viewCart={false} />
    </div>
  );

  return content;
}

export default App;

