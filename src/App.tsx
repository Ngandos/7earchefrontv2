import { useState } from "react"
import Cart from "./composants/Cart"
import ArticleList from "./composants/ArticleList"
import Header from "./composants/Header"
import Footer from "./composants/Footer"
import Articles from "./composants/Article"

function App() {

  const [viewCart, setViewCart] = useState(false)

  const pageContent = viewCart ? <Cart/> : <ArticleList/>

  const content = (
    <div className='MainArea'>
      <Header viewCart = { viewCart } setViewCart = {setViewCart} />
      { pageContent }
      <Footer viewCart={false} />
    </div>
  )
  console.log(Articles)

  return  content
}

export default App;

