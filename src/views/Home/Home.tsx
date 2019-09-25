import React from 'react';
import '../../styles/Home.css';
import Header from '../../components/Header';


// This is the main home view for the website
const Home: React.FC = () => {
  return (
    <div className="Home">
        <div className="Home-header">
            <Header />
        </div>
      <body>
      </body>
    </div>
  );
}

export default Home;
