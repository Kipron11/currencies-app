import './Navigation.scss';
import {
  BrowserRouter as Router, NavLink, Route, Routes, Navigate,
} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import CharactersPage from './CharactersPage/Characters';
import AboutPage from './AboutPage/About';
import Page404 from './Page404/Page404';

const TopNav = () => (
  <section className="TopSection">
    <Router>
      <header>
        <nav className="Navi">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/characters">Characters</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  </section>
);

export default TopNav;
