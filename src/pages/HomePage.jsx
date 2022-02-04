import React from 'react';

import Layout from './Layout';

import imgHandPhone from '/src/images/image-hand-phone.png';

const HomePage = () => {
  return (
    <Layout pageId="home">
      <section id="hero" className="hero">
        <div className="container">
          <div className="data">
            <h1 className="h1">
              Present and test your project with the community
            </h1>
            <button className="btn">View more</button>
          </div>
          <picture>
            <img src={imgHandPhone} alt="Hand Phone" />
          </picture>
        </div>
      </section>

      <div>Home Page</div>
    </Layout>
  );
};

export default HomePage;
