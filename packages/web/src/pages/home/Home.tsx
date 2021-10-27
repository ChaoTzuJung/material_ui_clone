import React from 'react';
import ChipsImg from '@chips/web/assets/images/home_chips.png';
import './home.scss';

const Home = (): React.ReactNode => {
  return (
    <div className="home-container">
      <h1>Chips</h1>
      <img src={ChipsImg} alt="chips" />
    </div>
  );
};

export default Home;
