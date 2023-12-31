import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Favorite from './pages/Favorite';
import Read from './pages/Read';
import NotFoundPage from './pages/NotFoundPage';
import { getNews } from './api/fetch';

enum PAGES {
  MAIN = 'main',
  FAVORITE = 'favorite',
  READ = 'read',
}

interface RouteConfig {
  path: string;
  title: string;
  Component: React.ComponentType;
}

export const ROUTE_CONFIG: Record<PAGES, RouteConfig> = {
  [PAGES.MAIN]: {
    path: '/',
    title: 'Home',
    Component: Home,
  },
  [PAGES.FAVORITE]: {
    path: '/favorite',
    title: 'Favorite',
    Component: Favorite,
  },
  [PAGES.READ]: {
    path: '/read',
    title: 'Read',
    Component: Read,
  },
};

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {Object.values(ROUTE_CONFIG).map(config => (
            <Route
              key={config.path}
              path={config.path}
              element={<config.Component />}
            />
          ))}

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
