import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './Componets/Body';
import Footer from './Componets/Footer';
import Header from './Componets/Header';
import './index.css';
// import'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css'
        
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='all'>
   <Header/>
   <Body/>
   <Footer/>
  </div>
);

