import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ArticlesProvider } from './context/ArticleProvider.tsx'
import { CartProvider } from './context/CartProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ArticlesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ArticlesProvider>
  </React.StrictMode>,
)
