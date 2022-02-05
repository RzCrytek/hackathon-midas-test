import React from 'react';
import { Link } from 'react-router-dom';

import styles from './CardMyProject.module.scss';

import imageProject from '/src/images/image-project.png';
import icoCalendar from '/src/images/icons/calendar.svg';
import icoCoin from '/src/images/icons/coin.svg';

const CardMyProject = () => {
  return (
    <div className={styles.card_project}>
      <picture className="card_image">
        <img src={imageProject} alt="Project" />
      </picture>

      <div className={styles.card_body}>
        <p className={styles.title}>
          <b>Architectural renaiss Architectural renaiss</b>
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
          interdum elit vitae eleifend.
        </p>

        <div className={styles.buttons}>
          <Link className="btn" to="#!">
            View more
          </Link>

          <Link className="btn btn-outline" to="#!">
            Statistics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardMyProject;
