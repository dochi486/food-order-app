import React from 'react';
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>리액트 식당</h1>
        <button>장바구니</button>
      </header>
      <div>
        <img src={mealsImage} />
      </div>
    </React.Fragment>
  );
};

export default Header;
