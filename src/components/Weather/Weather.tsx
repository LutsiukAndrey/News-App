import './Weather.scss';
import sun from '../../img/sun.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Weather = () => {
  return (
    <li className="weather-wraper ">
      <div className="weather__temperature">
        <span className="weather__temperature-value">23&deg;</span>
        <div className="weather-details">
          <p className="weather-details__description">Sunny</p>
          <p className="weather-details__location">
            <LocationOnIcon /> West Jakarta
          </p>
        </div>
      </div>
      <img className="weather-wraper__icon" src={sun} alt="" />
      <div className="date">
        <p className="date__day-of-week">Mon</p>
        <p className="date__value">20 Jan 2021</p>
      </div>
    </li>
  );
};

export default Weather;
