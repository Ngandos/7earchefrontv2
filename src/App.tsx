import { useState } from "react";
import Cart from "./composants/Cart";
import Header from "./composants/Header";
import Footer from "./composants/Footer";
import SearchBar from "./composants/SearchBar";
import './App.css';
import MenuNav from "./composants/MenuNav/MenuNav";
import CategorieList from "./composants/CategorieList";
import { Routes, Route } from "react-router-dom";
import ArticleList from "./composants/ArticleList";
import Connexion from "./composants/LogIn/Connexion";

function App() {

  const [viewCart, setViewCart] = useState(false)

  const pageContent = <Routes/>

  // if (location.pathname === "/categorie") {
  //   pageContent === <CategorieList/>
  // }
  // else if (location.pathname === "/") {
  //   pageContent === <ArticleList/>
  // }
  // else if (location.pathname === "/Cart") {
  //   pageContent === <Cart/>
  // }
  

  const content = (
    <div className='MainArea'>
      <Header viewCart = { viewCart } setViewCart = {setViewCart} />
      <div className="middle">
        <MenuNav/>
        <SearchBar/>
      </div>
      <Routes>
        <Route path="/" element = {<ArticleList />} />
        <Route path="/categorie" element = {<CategorieList />} />
        <Route path="/cart" element = {<Cart />} />
        <Route path="/connexion" element = {<Connexion />} />
      </Routes>
      { pageContent }
      <Footer viewCart={false} />
    </div>
  )

  return  content
}

export default App;

