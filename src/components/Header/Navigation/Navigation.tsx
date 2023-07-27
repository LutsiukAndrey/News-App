import './Navigation.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE_CONFIG } from '../../../App';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      {Object.values(ROUTE_CONFIG).map(config => (
        <NavLink
          className={({ isActive }) =>
            isActive ? 'link-active navigation__link' : 'navigation__link'
          }
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
