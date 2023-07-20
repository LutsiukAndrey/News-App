import Layout from './components/Layout/Layout';
import './main.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
import Favorite from './pages/Favorite';
import Read from './pages/Read';

// import NotFound from './pages/NotFound';
// import Layout from './components/Layout/Layout';
// import { Home } from './pages/Home';
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/read" element={<Read />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
