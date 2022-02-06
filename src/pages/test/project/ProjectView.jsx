import React from 'react';
import Layout from './Layout';

import icoCalendar from '/src/images/icons/calendar.svg';
import icoCoin from '/src/images/icons/coin.svg';

const ProjectView = () => {
  return (
    <Layout pageId="projectView">
      <div className="box">
        <p className="c-bot">
          <b className="medium">Description</b>
        </p>

        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
          interdum elit vitae eleifend. Phasellus ut elit condimentum, facilisis
          metus sed, condimentum tortor. Nulla ut sapien at nisl sollicitudin
          tempor in vitae purus. Mauris blandit finibus sapien, eget fringilla
          enim porttitor vel. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam semper interdum elit vitae eleifend. Phasellus ut elit
          condimentum, facilisis metus sed, condimentum tortor. Nulla ut sapien
          at nisl sollicitudin tempor in vitae purus. Mauris blandit finibus
          sapien, eget fringilla enim porttitor vel.
        </p>

        <p className="category">
          <b className="c-bot">Category: </b>
          <span className="tag">Travels & tourism</span>
        </p>

        <div className="info">
          <p>
            <img src={icoCalendar} alt="ico calendar" />
            Until Feb 9, 12:00 PST
          </p>

          <p>
            <img src={icoCoin} alt="ico coin" />
            0.0005 MATIC
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectView;
