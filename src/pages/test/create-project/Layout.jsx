import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CONTRACT_ADDRESS } from '../../../utils/constants/constants';
import midasTest from '../../../utils/json/MidasTest.json';

import { Footer, Header } from '../../_includes';

const Layout = ({ ready, children, pageId, values }) => {

  const {
    projectDetails,
    restrictionDetails,
    deadline,
    testType,
    projectQuestions,
    maxTesters,
    investment
  } = values;

  const [createdProjectId, setCreatedProjectId] = useState(null);

  const createProject = async (e) => {
    try {
      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, midasTest.abi, signer);

        let createProjectTxn = await connectedContract.createProject(
          Math.floor(Date.now() / 1000),
          JSON.stringify(projectDetails),
          deadline,
          testType,
          JSON.stringify(projectQuestions),
          JSON.stringify(restrictionDetails),
          maxTesters,
          ethers.utils.parseEther(`${investment}.0`)
        );

        await createProjectTxn.wait();

        let userProjects = await connectedContract.getUserCreatedProjects();

        setCreatedProjectId(userProjects.at(-1));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const kickOffProject = async (e) => {
    try {
      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, midasTest.abi, signer);

        let kickOffProjectTxn = await connectedContract.projectKickOff(
          createdProjectId,
          {value: ethers.utils.parseEther(`${parseInt(investment) + 1}.0`)}
        );

        await kickOffProjectTxn.wait();
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log(createdProjectId);
    console.log(investment);
  }, [createdProjectId]);

  return (
    <div id="wrapper">
      <Header />
      <main id={pageId} className="create-project-main">
        <section id="hero" className="hero">
          <div className="container">
            <h1 className="h1">Create your proyect</h1>

            <div className="buttons">
              {
                ready ?
                createdProjectId === null ? <button className="btn btn--orange" type="button" onClick={createProject}>
                Save
                </button> : 
                <button className="btn btn--orange" type="button" onClick={kickOffProject}>
                Kick off!
                </button> :
                null
              }
            </div>
          </div>
        </section>

        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
