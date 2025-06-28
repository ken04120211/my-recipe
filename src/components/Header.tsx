// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Recipe</h1>
      <button>User Account</button>
      <nav>
        <ul>
          <li><a href="/">Today's Recommendation</a></li>
          <li><a href="/favorites">Favorites</a></li>
          <li><a href="/history">History</a></li>
          <li><a href="/kitchen">Kitchen</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;