/* eslint-disable import/extensions */
/* eslint-disable import/named */
import React from 'react';
import './App.css';
import { Header } from './components/Header/Header.jsx';
import { Article } from './components/Article/Article.jsx';
import { Welcome } from './components/Welcome/Welcome.jsx';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
