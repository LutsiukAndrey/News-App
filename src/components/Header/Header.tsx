import './Header.scss';

import Navigation from '../Navigation/Navigation';
import SearchForm from './SearchForm/SearchForm';
import ThemSwitcher from './ThemSwitcher/ThemSwitcher';

const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <SearchForm />
      <ThemSwitcher />
    </header>
  );
};

export default Header;
