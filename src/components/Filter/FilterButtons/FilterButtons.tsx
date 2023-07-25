import { useEffect, useState, useMemo } from 'react';
import './FilterButtons.scss';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';

const FilterButtons = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const initialArr = [
    'Apple',
    'Banana',
    'Cherry',
    'Dolphin',
    'Elephant',
    'Flamaxgo',
    'Giraffe',
    'Honey',
    'Iguana',
    'Jaguar',
    'Kiwi',
    'Lion',
    'Mango',
    'Nectarine',
  ];

  const mediaQuery = {
    desktop: useMediaQuery('(min-width:1280px)'),
    tablet: useMediaQuery('(min-width:768px)'),
    mobile: useMediaQuery('(min-width:320px)'),
  };

  const { desktop, tablet } = mediaQuery;

  const arrButtons = desktop
    ? initialArr.slice(0, 6)
    : tablet
    ? initialArr.slice(0, 4)
    : [];
  const arrList = desktop
    ? initialArr.slice(6)
    : tablet
    ? initialArr.slice(4)
    : initialArr;

  return (
    <div className="filter-buttons">
      {(desktop || tablet) &&
        arrButtons.map(e => {
          return (
            <button key={e} className="grop__btn">
              {e}
            </button>
          );
        })}

      <div>
        <ListItemButton onClick={handleClick} className="grop__btn">
          <ListItemText primary="Others" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit className="collapse">
          <List component="div" disablePadding className="collapse__list">
            {arrList.map(e => {
              return (
                <ListItemButton
                  key={e}
                  sx={{ p: 0, marginBottom: '12px' }}
                  className="collapse__list-item"
                >
                  <ListItemText primary={e} sx={{ m: 0 }} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      </div>
    </div>
  );
};

export default FilterButtons;
