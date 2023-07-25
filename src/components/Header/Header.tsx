import { Link } from 'react-router-dom';
import './Header.scss';
import MobileMenu from './MobileMenu/MobileMenu';

import Navigation from './Navigation/Navigation';
import SearchForm from './SearchForm/SearchForm';
import ThemSwitcher from './ThemSwitcher/ThemSwitcher';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const mediaQuery = {
    desktop: useMediaQuery('(min-width:1280px)'),
    tablet: useMediaQuery('(min-width:768px)'),
    mobile: useMediaQuery('(max-width:320px)'),
  };

  const { desktop, tablet, mobile } = mediaQuery;

  return (
    <header className="header">
      <Link to="/" className="logo">
        News
      </Link>
      {tablet && <Navigation />}
      <SearchForm />

      {tablet && <ThemSwitcher />}
      {!tablet && (
        <button
          className="buurger-btn"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <MenuIcon />
        </button>
      )}
      {toggleMenu && (
        <MobileMenu setToggle={setToggleMenu} toggleMenu={toggleMenu} />
      )}
    </header>
  );
};

export default Header;
