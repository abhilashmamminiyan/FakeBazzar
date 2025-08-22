import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from "./Contexts/AuthContext";
import { SearchProvider } from './Contexts/SearchContext';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './Contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <BrowserRouter>
      <AuthProvider>

        <SearchProvider >
          
            <App />
          
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
