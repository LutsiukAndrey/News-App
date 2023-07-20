import './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">
        <span>Home</span>
      </NavLink>
      <NavLink to="/favorite">
        <span>Favorite</span>
      </NavLink>
      <NavLink to="/read">
        <span>Read</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
