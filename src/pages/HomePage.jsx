import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardProject from '../components/CardProject/CardProject';

import Layout from './Layout';

import imgHandPhone from '/src/images/image-hand-phone.png';
import image1 from '/src/images/image-1.png';
import image2 from '/src/images/image-2.png';
import LogoDiscord from '/src/images/logo-discord.svg';
import imgSmartContract from '/src/images/smart-contract.png';
import { useAuthContext } from '../context/AuthContext';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS } from '../utils/constants/constants';
import midasTest from "../utils/json/MidasTest.json"


const HomePage = () => {

  const { currentAccount } = useAuthContext();

  const [homeProjects, setHomeProjects] = useState([]);

  const getProjectsForHome = async () => {
    try {
      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, midasTest.abi, signer);

        const obtainedData = await connectedContract.getAllProjects();

        console.log("Start querying projects");

        if (obtainedData.length != 0) {
          let auxList = [];

          if (obtainedData.length <= 4) {
            for (let projectId of obtainedData) {
              let project = await getProjectInfo(projectId);
              auxList.push(project);
            }
          } else {
            for (let i = 0; i < 4; i++) {
              let project = await getProjectInfo(obtainedData[i]);
              auxList.push(project);
            }
          }

          setHomeProjects(auxList);
        }

        console.log("Projects obtained!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getProjectInfo = async (id) => {
    try {
      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, midasTest.abi, signer);

        const obtainedData = await connectedContract.getProjectInfo(id);

        console.log(obtainedData);
        console.log("Obtained Project!");

        return obtainedData;
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (currentAccount !== null) {
      getProjectsForHome();
    }
  }, [currentAccount]);

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
            {homeProjects.map((v, i) => (
              <CardProject 
                key={i}
                projectDetails={v.projectDetails}
                deadline={v.deadline}
                maxTesters={v.maxTestersQuantity}
                investment={v.investment}
                id={v.id} />
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
