import React from 'react';
import StickyForm from './component/StickyForm';
import StickyList from './component/StickyList';
import Footer from './component/Footer';
import './App.css';

const App = () => ( 
  <div className="App">
    <StickyForm />
    <StickyList />
    <Footer />
  </div>
);


export default App