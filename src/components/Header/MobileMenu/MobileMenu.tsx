import React from 'react';
import './MobileMenu.scss';
import Navigation from '../Navigation/Navigation';
import ThemSwitcher from '../ThemSwitcher/ThemSwitcher';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const MobileMenu = ({
  toggleMenu,
  setToggle,
}: {
  toggleMenu: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__header">
        <Link to="/" className="logo">
          News
        </Link>
        <button
          className="close-menu"
          onClick={() => {
            setToggle(!toggleMenu);
          }}
        >
          <CloseIcon />
        </button>
      </div>
      <Navigation />
      <div className="them-swithcer-wrapper">
        <ThemSwitcher />
      </div>
    </div>
  );
};

export default MobileMenu;
