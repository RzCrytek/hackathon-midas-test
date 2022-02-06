import React from 'react';
import { Link } from 'react-router-dom';

import styles from './CardMyProject.module.scss';

import imageProject from '/src/images/image-project.png';
import icoCalendar from '/src/images/icons/calendar.svg';
import icoCoin from '/src/images/icons/coin.svg';
import { cropAtLengthIdx, PROJECT_STATUS_ACTIONS_DICT, PROJECT_STATUS_DICT } from '../../utils/constants/constants';

const CardMyProject = (props) => {

  const details = JSON.parse(props.projectDetails);
  
  const cover =  details.projectImages.filter(image => image.cover === true)[0].url


  return (
    <div className={styles.card_project}>
      <picture className="card_image">
        <img src={imageProject} alt="Project" />
      </picture>

      <div className={styles.card_body}>
        <p className={styles.title}>
          <b>{cropAtLengthIdx(30, details.title)}</b>
        </p>
        <p className={styles.description}>
          {cropAtLengthIdx(80, details.description)}
        </p>

        <div className={styles.buttons}>

          <div style={{height: "48px", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px", color: "#676596"}}>
            <p>{PROJECT_STATUS_DICT[props.status.toString()]}</p>
          </div>

          <Link className="btn btn-outline" to="#!">
            {PROJECT_STATUS_ACTIONS_DICT[props.status.toString()]}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardMyProject;
