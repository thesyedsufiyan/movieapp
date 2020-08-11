import React from 'react';
import './App.css';
import Search from './components/Search/Search.component';

function App() {
  return (
    <div>
      <div className="navbar">
        <div className='navbar-title'> Home</div>
      </div>
      <div className='navbar-item2'>  favorites2</div>
      <Search />

    </div>
  );
}

export default App;
