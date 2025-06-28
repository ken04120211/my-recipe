import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Recommendation from './components/Recommendation';
import Favorites from './components/Favorites';
import History from './components/History';
import Kitchen from './components/Kitchen';
import './App.css';
import { FavoritesProvider } from './FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/recommendation" element={<Recommendation />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/history" element={<History />} />
            <Route path="/kitchen" element={<Kitchen />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
