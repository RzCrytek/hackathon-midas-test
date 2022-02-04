import React from 'react';
import { Link } from 'react-router-dom';

import styles from './CardProject.module.scss';

import imageProject from '/src/images/image-project.png';
import icoCalendar from '/src/images/icons/calendar.svg';
import icoCoin from '/src/images/icons/coin.svg';

const CardProject = () => {
  return (
    <div className={styles.card_project}>
      <picture className="card_image">
        <img src={imageProject} alt="Project" />
      </picture>

      <div className={styles.card_body}>
        <p className={styles.title}>
          <b>Name project</b>
        </p>
        <p className={styles.category}>Adversiting</p>

        <p className={styles.date}>
          <img src={icoCalendar} alt="ico calendar" />
          Until Feb 9, 12:00 PST
        </p>
        <p className={styles.coin}>
          <img src={icoCoin} alt="ico coin" />
          0.0005 MATIC
        </p>

        <Link className="btn" to="#!">
          View more
        </Link>
      </div>
    </div>
  );
};

export default CardProject;
