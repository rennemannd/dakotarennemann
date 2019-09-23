import React from 'react';
import logo from '../../maintenance.png';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          This site is currently down for maintenance, below are temporary work-related links:
        </p>
        <a
          className="App-link"
          href="https://drive.google.com/file/d/1DsEsUamQWXeQ5ZefR-y3jqBUd54F35av/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
            className="App-link"
            href="https://github.com/rennemannd"
            target="_blank"
            rel="noopener noreferrer"
        >
          Github
        </a>
        <a
            className="App-link"
            href="https://www.linkedin.com/in/rennemannd/"
            target="_blank"
            rel="noopener noreferrer"
        >
          LinkdIn
        </a>
      </header>
    </div>
  );
}

export default Home;
