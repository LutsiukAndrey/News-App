import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
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
      {/* <FormControl variant="outlined" className="search-form">
        <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={'text'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end">
                <SearchIcon className="search-form__button-icon" />
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl> */}
    </>
  );
};

export default SearchForm;
