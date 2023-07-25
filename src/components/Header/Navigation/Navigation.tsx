import './Navigation.scss';
import useMediaQuery from '@mui/material/useMediaQuery';

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ROUTE_CONFIG } from '../../../App';

const Navigation: React.FC = () => {
  // const isActive = true;
  return (
    <nav className="navigation">
      {Object.values(ROUTE_CONFIG).map(config => (
        <NavLink
          className={({ isActive }) =>
            isActive ? 'link-active navigation__link' : 'navigation__link'
          }
          // className="navigation__link"
          key={config.path}
          to={config.path}
        >
          {config.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;