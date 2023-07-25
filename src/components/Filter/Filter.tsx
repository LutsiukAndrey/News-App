import './Filter.scss';

import { useState } from 'react';
import FilterButtons from './FilterButtons/FilterButtons';
import FilterCalendar from './FilterCalendar/FilterCalendar';

const Filter = () => {
  return (
    <div className="filter">
      <FilterButtons />
      <FilterCalendar />
    </div>
  );
};

export default Filter;
