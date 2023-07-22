import { useState } from "react";
import Cart from "./composants/Cart";
import ArticleList from "./composants/ArticleList";
import Header from "./composants/Header";
import Footer from "./composants/Footer";
import SearchBar from "./composants/SearchBar";
import './App.css';
import MenuNav from "./composants/MenuNav/MenuNav";
import ArticlePage from "./composants/Pages/ArticlePage/ArticlePage.syled";
import CategorieList from "./composants/CategorieList";
import { Routes, Route } from "react-router-dom";

function App() {

  const [viewCart, setViewCart] = useState(false)

  const pageContent = viewCart ? <Cart/> : <ArticleList/> || <ArticlePage/> || <CategorieList/>

  if (location.pathname === "/categorie") {
    pageContent === <CategorieList/>
  }

  const content = (
    <div className='MainArea'>
      <Header viewCart = { viewCart } setViewCart = {setViewCart} />
      <div className="middle">
        <MenuNav/>
        <SearchBar/>
      </div>
      { pageContent }
      <Routes>
        <Route path="/categorie" element= {<CategorieList />} />
        <Route path="/articlePage" element={<ArticlePage/>} />
      </Routes>
      <Footer viewCart={false} />
    </div>
  )

  return  content
}

export default App;

