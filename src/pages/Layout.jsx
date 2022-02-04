import React from 'react';
import { Footer, Header } from './_includes';

const Layout = ({ children, pageId }) => {
  return (
    <div id="wrapper">
      <Header />
      <main id={pageId} className="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
