import React from 'react';
import { Link } from 'react-router-dom';
import CardProject from '../components/CardProject/CardProject';

import Layout from './Layout';

import imgHandPhone from '/src/images/image-hand-phone.png';
import image1 from '/src/images/image-1.png';
import image2 from '/src/images/image-2.png';
import LogoDiscord from '/src/images/logo-discord.svg';
import imgSmartContract from '/src/images/smart-contract.png';

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

      <section id="new-projects">
        <div className="container">
          <h2 className="h2">
            Try the <b className="c-orange">new projects</b>
          </h2>

          <div className="list-card-projects list-new-projects">
            {[...new Array(4)].map((v, i) => (
              <CardProject key={i} />
            ))}
          </div>

          <Link to="#!" className="btn btn-outline btn-view">
            View more projects
          </Link>
        </div>
      </section>

      <section id="better">
        <div className="container">
          <div className="row">
            <div className="col-md-7 image">
              <div className="image-content">
                <img src={image1} alt="image" />
              </div>
            </div>
            <div className="col-md-4 information">
              <div className="information-content">
                <h3 className="h3">
                  <b className="c-orange">Better functionality and security</b>{' '}
                  in your tests thanks to the block system
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam semper interdum elit vitae eleifend. Phasellus ut elit
                  condimentum, facilisis metus sed, condimentum tortor. Nulla ut
                  sapien at nisl sollicitudin tempor in vitae purus. Mauris
                  blandit finibus sapien, eget fringilla enim porttitor vel.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam semper interdum elit vitae eleifend.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="connect-our">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-md-6 information">
                  <div className="information-content">
                    <h3 className="h3">
                      <b className="c-orange">Connect to our discord</b> to
                      solve more personalized questions
                    </h3>

                    <a
                      className="btn btn-link-discord"
                      href="#!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={LogoDiscord} alt="Logo Discord" />
                      Connect discord channel
                    </a>
                  </div>
                </div>
                <div className="col-md-6 image">
                  <div className="image-content">
                    <img src={image2} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="verified-sc">
        <div className="container">
          <div className="content">
            <picture>
              <img src={imgSmartContract} alt="image SC" />
            </picture>

            <div className="data">
              <h5 className="h5">Verified our</h5>
              <h3 className="h3 c-orange">
                <b>Smart contract</b>
              </h3>

              <p className="address">
                <b>Address:</b>{' '}
                <a href="#!" target="_blank" rel="noopener noreferrer">
                  0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
