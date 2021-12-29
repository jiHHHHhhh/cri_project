import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Test from './components/test'
import axios from 'axios';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
    <App/>
    <Routes>
      <Route path="/test" element={<Test />} />
    </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
