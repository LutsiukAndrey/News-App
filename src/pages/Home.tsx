import './Home.scss';

import Filter from '../components/Filter/Filter';
import NewsCard from '../components/NewsCard/NewsCard';
import Weather from '../components/Weather/Weather';
import { useState } from 'react';

export const Home = () => {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [newsArr, setNewsArr] = useState([]);

  return (
    <section className="home-page">
      <Filter />
      <ul className="home-page__wraper">
        <Weather />
        {arr.map(e => (
          <NewsCard key={e} />
        ))}
      </ul>
    </section>
  );
};
