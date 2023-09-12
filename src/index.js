import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import AuthContext, { AuthContextProvider } from './authContext';
import ScrollToTop from './ScrolltoTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
    <BrowserRouter>
    <ScrollToTop>
      <App />
      </ScrollToTop>
    </BrowserRouter>
    </AuthContextProvider>
);

