// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Recipe</h1>
      <button>User Account</button>
      <nav>
        <ul>
          <li><Link to="/">Today's Recommendation</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/kitchen">Kitchen</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;