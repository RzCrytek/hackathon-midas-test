import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Footer, Header } from '../_includes';

const Layout = () => {
  const [pageId, setPageId] = useState('');

  return (
    <div id="wrapper">
      <Header />
      <main id={pageId} className="testing-main">
        <section id="hero" className="hero">
          <div className="container">
            <h1 className="h1">Turn everything you tested into gold</h1>

            <div className="buttons-together">
              <NavLink className="btn" to="testing">
                Testing
              </NavLink>

              <NavLink className="btn" to="my-projects">
                My Projects
              </NavLink>
            </div>
          </div>
        </section>

        <Outlet context={{ setPageId }} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
