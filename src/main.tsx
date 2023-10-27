import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ArticlesProvider } from './context/ArticleProvider.tsx'
import { CartProvider } from './context/CartProvider.tsx'
import { CategoriesProvider } from './context/CategorieProvider.tsx';
import { ClientProvider } from './context/ClientProvider.tsx';
import { BrowserRouter } from 'react-router-dom'
import { CommandeProvider } from './context/CommandeProvider.tsx'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>
    <ArticlesProvider>
      <CartProvider>
        <CategoriesProvider>
          <ClientProvider>
            <CommandeProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </CommandeProvider>
          </ClientProvider>
        </CategoriesProvider>
      </CartProvider>
    </ArticlesProvider>
  </React.StrictMode>,
)
