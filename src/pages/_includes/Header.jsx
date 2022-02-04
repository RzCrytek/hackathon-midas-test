import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test">test1</Link>
        </li>
        <li>
          <Link to="/test/demo2">test2</Link>
        </li>
        <li>
          <Link to="/test/demo3">test3</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
