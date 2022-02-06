import React from 'react';
import { Footer, Header } from '../../_includes';

const Layout = ({ children, pageId }) => {
  return (
    <div id="wrapper">
      <Header />
      <main id={pageId} className="project-testing-main">
        <section id="hero" className="hero">
          <div className="container">
            <h1 className="h1">Project name</h1>

            <div className="buttons">
              <button className="btn btn--yellw" type="button">
                Start Test
              </button>
            </div>
          </div>
        </section>

        <section className="project-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">{children}</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
