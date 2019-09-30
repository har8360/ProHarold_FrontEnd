import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter';
import Palindromo from './Palindromo/Palindromo';
import UserFormMain from './UserForm/_UserFormMain';
//import Body2 from './Counter/Counter2';


function App() {
  const dialogText = "text goes here..";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Counter txt={dialogText}>
      </Counter>
      <Palindromo></Palindromo>
      <UserFormMain></UserFormMain>
    </div>
  );
}

export default App;
