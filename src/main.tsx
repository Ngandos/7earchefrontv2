import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ArticlesProvider } from './context/ArticlesProvider.tsx'
import { CartProvider } from './context/CartProvider.tsx'
import { CategoriesProvider } from './context/CategoriesProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>
    <ArticlesProvider>
      <CartProvider>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </CartProvider>
    </ArticlesProvider>
  </React.StrictMode>,
)
