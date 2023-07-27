import './ThemSwitcher.scss';

import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { toggleDarkMode } from '../../../redux/theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode } from '../../../redux/theme/themeSelector';
import { useEffect } from 'react';

const ThemSwitcher = () => {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('class', 'dark');
      return;
    }

    document.documentElement.setAttribute('class', 'light');
  }, [darkMode]);

  const Switcher = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      onChange={() => {
        handleThemeToggle();
      }}
      checked={darkMode}
      {...props}
    />
  ))(({ theme }) => ({
    width: 40,
    height: 21,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      color: '#4B48DB',

      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(20px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#4B48DB',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 16,
      height: 16,
    },
    '& .MuiSwitch-track': {
      borderRadius: 20,
      border: '1px solid #4B48DB',

      backgroundColor: theme.palette.mode === 'light' ? '#FFF' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  return (
    <div className="switcher">
      <LightModeIcon
        className="switcher__icon light"
        sx={{ color: !darkMode ? '#4440f6' : '#a8a8a8' }}
      />
      <Switcher sx={{ m: 1 }} />
      <DarkModeIcon
        className="switcher__icon dark"
        sx={{ color: darkMode ? '#4440f6' : '#a8a8a8' }}
      />
    </div>
  );
};

export default ThemSwitcher;
