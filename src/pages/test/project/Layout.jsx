import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext';
import { CONTRACT_ADDRESS } from '../../../utils/constants/constants';
import midasTest from '../../../utils/json/MidasTest.json';
import { Footer, Header } from '../../_includes';

const Layout = ({ children, pageId, projectDetails, isOwner, alreadyEnrolled, enrollToProject, enrollmentId }) => {

  const {name, eid} = useParams();

  return (
    <div id="wrapper">
      <Header />
      <main id={pageId} className="project-testing-main">
        <section id="hero" className="hero">
          <div className="container">
            <h1 className="h1">{projectDetails ? projectDetails.title : "Project name"}</h1>

            {!isOwner && !eid ? 
              alreadyEnrolled ?
              <div className="buttons">
                <Link className="btn btn--yellw" to={`/app/project/${name}/enrollment/${enrollmentId}/terms`}>
                  Start Test
                </Link>
              </div> : 
              <div className="buttons">
                <button className="btn btn--yellw" type="button" onClick={enrollToProject}>
                  Enroll
                </button>
              </div> : 
              null 
            }
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
