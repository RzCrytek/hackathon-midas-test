import React from 'react';
import { Link } from 'react-router-dom';

import styles from './CardProject.module.scss';

import imageProject from '/src/images/image-project.png';
import icoCalendar from '/src/images/icons/calendar.svg';
import icoCoin from '/src/images/icons/coin.svg';
import { DATE_OPTIONS } from '../../utils/constants/constants';
import { ethers } from 'ethers';

const CardProject = (props) => {

  const details = JSON.parse(props.projectDetails);

  const reward = ethers.utils.formatEther(props.investment.div(props.maxTesters).toString());

  
  const cover =  details.projectImages.filter(image => image.cover === true)[0].url
  

  return (
    <div className={styles.card_project} style={{overflow: 'hidden'}}>
      <picture className="card_image">
        <img src={cover} alt="Project" style={{height: '210px', width: '100%'}} />
      </picture>

      <div className={styles.card_body}>
        <p className={styles.title}>
          <b>{details.title}</b>
        </p>
        <p className={styles.category}>{details.category}</p>

        <p className={styles.date}>
          <img src={icoCalendar} alt="ico calendar" />
          Until {new Date(props.deadline.toNumber()*1000).toLocaleString("en", DATE_OPTIONS)}
        </p>
        <p className={styles.coin}>
          <img src={icoCoin} alt="ico coin" />
          {reward} MATIC
        </p>

        <div className="button-center">
          <Link className="btn" to={props.enrollmentId ? `/app/project/${props.id.toString()}/enrollment/${props.enrollmentId}/terms` : `app/project/${props.id.toString()}/view`}>
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
