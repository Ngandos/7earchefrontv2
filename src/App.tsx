import { useState } from "react";
import Cart from "./composants/Cart";
import ArticleList from "./composants/ArticleList";
import Header from "./composants/Header";
import Footer from "./composants/Footer";
import SearchBar from "./composants/SearchBar";
import './App.css';
import MenuNav from "./composants/MenuNav/MenuNav";

function App() {

  const [viewCart, setViewCart] = useState(false)

  const pageContent = viewCart ? <Cart/> : <ArticleList/>

  const content = (
    <div className='MainArea'>
      <Header viewCart = { viewCart } setViewCart = {setViewCart} />
      <div className="middle">
        <MenuNav/>
        <SearchBar/>
      </div>
      { pageContent }
      <Footer viewCart={false} />
    </div>
  )

  return  content
}

export default App;

