import './SearchForm.scss';
import SearchIcon from '@mui/icons-material/Search';
const SearchForm = () => {
  return (
    <>
      <form className="search-form">
        <input
          type="text"
          className="search-form__input"
          placeholder="Search"
        />
        <button type="submit" className="search-form__button">
          <SearchIcon className="search-form__button-icon" />
        </button>
      </form>
    </>
  );
};

export default SearchForm;
