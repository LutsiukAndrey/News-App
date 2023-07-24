import '../../main.scss';

import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Suspense fallback={<h1>Loading</h1>}>
        <Outlet />
      </Suspense>

      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
