import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import Product from './pages/product';
import reportWebVitals from './reportWebVitals';
import './assets/styles/output.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='product' element={<Product />} />
    {/* <Route path='cart' element={<Cart />} />
    <Route path='history' element={<History />} /> */}
    {/* <Route path='*' element={<Notfound />} /> */}
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
