import React from 'react';
import './App.css';
import GameBoard from './GameBoard';
import './GameBoard.css';

function App() {
  return (
    <div className="app tvt-theme-root">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <button className="btn">Template Button</button>
          </div>
        </div>
      </nav>

      <main>
        <GameBoard />
      </main>
    </div>
  );
}

export default App;