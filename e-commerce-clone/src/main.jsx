import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import Signup from './Pages/Signup';
import Header from './Components/Header';
import ProductDetails from './Components/ProductDetails';
import ProtectedRoute from './Components/ProtectedRoute';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
     
      <Header/>
      <App />
      {/* <ProductDetails/> */}
      {/* <ProtectedRoute/> */}
    </Router>
  </React.StrictMode>
);
