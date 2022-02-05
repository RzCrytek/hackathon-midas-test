import React from 'react';
import { NavLink } from 'react-router-dom';

import { Footer, Header } from '../../_includes';

const Layout = ({ children, pageId }) => {
  return (
    <div id="wrapper">
      <Header />
      <main id={pageId} className="create-project-main">
        <section id="hero" className="hero">
          <div className="container">
            <h1 className="h1">Create your proyect</h1>

            <div className="buttons">
              <button className="btn btn--orange" type="button">
                Save
              </button>
            </div>
          </div>
        </section>

        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
