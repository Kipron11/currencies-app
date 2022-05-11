import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
import CharactersPage from './Pages/CharactersPage/CharactersPage';
import EpisodesPage from './Pages/EpisodesPage/EpisodesPage';
import LocationsPage from './Pages/LocationsPage/LocationsPage';
import Page404 from './Pages/Page404/Page404';
import Header from './Components/Header/Header';
import CharacterPage from './Pages/CharacterPage/CharacterPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<CharactersPage />} />
      <Route path="/characters/:id" element={<CharacterPage />} />
      <Route path="/episodes" element={<EpisodesPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" />} />

    </Routes>
  </Router>
);

export default App;
