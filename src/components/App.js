import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Header from './Header';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
    <header className="App-header">
      <h1>Welcome to My Fitness</h1>
    <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
    </header>
    </div>
  );
}

export default App;
