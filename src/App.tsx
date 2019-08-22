import React from 'react';
import logo from './logo.svg';
import './App.css';
import useHover from "./components/useHover";
// import useHover2 from "./components/useHover2";

const App: React.FC = () => {
  const [hoverRef, isHovered] = useHover();
  // const {ref: hoverRef, value: isHovered} = useHover2();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div ref={hoverRef}>
          {isHovered ? '😁' : '☹️'}
        </div>
      </header>
    </div>
  );
};

export default App;
