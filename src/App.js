import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import ThemeContext from './context/ThemeContext';

function App() {

  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className="App">
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <section className={darkMode ? 'Dark' : 'Light'}>
          <Header />
          <Characters />
        </section>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
