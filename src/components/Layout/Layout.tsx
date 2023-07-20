import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
// import Navigation from '../Navigation/Navigation';

const Layout = () => {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<h1>Loading</h1>}>
        <Outlet />
      </Suspense>

      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
