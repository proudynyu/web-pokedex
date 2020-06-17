import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Header className="header-bar" />
      <div className="container">
        <Sidebar className="sidebar"/>
        <section className="content">
          <Router />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
