import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

import CardProject from '../../components/CardProject/CardProject';
import { useAuthContext } from '../../context/AuthContext';
import { CATEGORY_DICT, CONTRACT_ADDRESS, DATE_OPTIONS } from '../../utils/constants/constants';
import midasTest from "../../utils/json/MidasTest.json";

import imgCoin from '/src/images/icons/coin.svg';

const Testing = () => {
  const { setPageId } = useOutletContext();
  const { currentAccount } = useAuthContext();

  const [allOpenedProjects, setAllOpenedProjects] = useState([]);

  const [userEnrollments, setUserEnrollments] = useState([]);

  const getAllOpenedProjects = async () => {

    try {
      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, midasTest.abi, signer);

        const projects = await connectedContract.getAllProjects();

        if (projects.length != 0) {
          let auxList = [];

          for (let projectId of projects) {
            let project = await getProjectInfo(projectId);
            if (project[0].status.toString() === "1") {
              auxList.push(project);
            }
          }

          setAllOpenedProjects(auxList);

          console.log("Projects obtained!");
        }
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

        const projectInfo = await connectedContract.getProjectInfo(id);
        const projectOwnerName = await connectedContract.getProjectOwnerName(id);

        console.log(projectInfo);
        console.log("Obtained Project!");

        return [projectInfo, projectOwnerName];
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getCurrentUserEnrollments = async () => {
    try {
      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, midasTest.abi, signer);

        const obtainedData = await connectedContract.getUserEnrollments(currentAccount, false);

        if (obtainedData.length !== 0) {          
          let auxList = [];

          for (let enrollmentId of obtainedData) {
            let enrollment = await getEnrollmentInfo(enrollmentId);
            auxList.push(enrollment);
          }

          setUserEnrollments(auxList);
        }

        console.log("Done!");

      }
    } catch (error) {
      console.log(error);
    }
  }

  const getEnrollmentInfo = async (id) => {
    try {
      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, midasTest.abi, signer);

        const obtainedData = await connectedContract.getTestEnrollment(id);
        const enrollmentProject = await connectedContract.getTestEnrollmentProjectInfo(id);

        console.log("Done!");

        return [obtainedData, enrollmentProject];
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setPageId('testing');
  }, []);

  useEffect(() => {
    if (currentAccount !== null) {
      getAllOpenedProjects();
      getCurrentUserEnrollments();
      console.log(allOpenedProjects);
    }
  }, [currentAccount]);

  return (
    <section id="testing-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <section className="my-tests">
              <h5 className="h5 c-1">
                <b>My test’s</b>
              </h5>

              <div className="box">
                <div className="top">
                  <p className="c-1">
                    <b className="medium">
                      Start testing all the quizzes you applied to
                    </b>
                  </p>
                  <Link to="#!">View history</Link>
                </div>

                <div className="list-card-projects list-new-projects">
                  {userEnrollments.map((v, i) => (
                    <CardProject 
                      key={i} 
                      projectDetails={v[1].projectDetails}
                      deadline={v[1].deadline}
                      maxTesters={v[1].maxTestersQuantity}
                      investment={v[1].investment}
                      id={v[1].id}
                      enrollmentId={v[0].id.toString()}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section className="open-projects">
              <h5 className="h5 c-1">
                <b>Opened projects</b>
              </h5>

              <div className="box">
                <div className="search-top"></div>

                <div className="table-content">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Project name</th>
                        <th>Published by</th>
                        <th>Category</th>
                        <th>Reward</th>
                        <th>Close project</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allOpenedProjects.map((v, i) => {

                          let details = JSON.parse(v[0].projectDetails);
                          let reward = ethers.utils.formatEther(v[0].investment.div(v[0].maxTestersQuantity).toString());

                          return <tr key={i}>
                            <td>{details.title}</td>
                            <td>{v[1]}</td>
                            <td>{CATEGORY_DICT[details.category]}</td>
                            <td className="td-image">
                              <img src={imgCoin} alt="ico coin" />
                              <span>{reward} MATIC</span>
                            </td>
                            <td>{new Date(v[0].deadline.toNumber()*1000).toLocaleString("en", DATE_OPTIONS)}</td>
                            <td className="more">
                              <Link to={`/app/project/${v[0].id.toString()}/view`}>View more</Link>
                            </td>
                          </tr>
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;
