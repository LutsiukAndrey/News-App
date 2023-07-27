import './NewsCard.scss';
import { useState } from 'react';
import aaa from '../../img/aaaa.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const NewsCard = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <li className="news-card">
      <div className="news-card__image-wraper">
        <img src={aaa} alt="" className="news-card__image-wraper__image" />
        <span className="news-card__image-wraper__text">Job searching </span>
        <button
          className="news-card__image-wraper__favorite-button"
          onClick={() => setToggle(!toggle)}
        >
          <span className="news-card__image-wraper__favorite-button__text">
            {!toggle ? 'Add to favorite ' : 'Remove from favorite '}
          </span>
          {!toggle ? (
            <FavoriteBorderIcon sx={{ color: '#4440F6' }} />
          ) : (
            <FavoriteIcon sx={{ color: '#4440F6' }} />
          )}
        </button>
      </div>
      <div className="news-card__description-wraper">
        <h3 className="news-card__description-wraper__title">
          8 tips for passing an online interview that will help you get a job
        </h3>
        <p className="news-card__description-wraper__description">
          Before you start looking for a job, it is useful to familiarize
          yourself with the job prospects offered by these...
        </p>
      </div>
      <div className="news-card__details">
        <span className="news-card__date">20/02/2021</span>
        <button className="news-card__read-more-button">Read more</button>
      </div>
    </li>
  );
};

export default NewsCard;
