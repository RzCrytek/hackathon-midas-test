import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

import CardMyProject from '../../components/CardMyProject/CardMyProject';

import image3 from '/src/images/image-3.png';
import imgCoin from '/src/images/icons/coin.svg';
import { useAuthContext } from '../../context/AuthContext';
import { ethers } from 'ethers';
import { CATEGORY_DICT, CONTRACT_ADDRESS, DATE_OPTIONS, PROJECT_STATUS_ACTIONS_DICT, PROJECT_STATUS_DICT } from '../../utils/constants/constants';
import midasTest from '../../utils/json/MidasTest.json';

const MyProjects = () => {
  const { setPageId } = useOutletContext();
  const { currentAccount } = useAuthContext();

  const [myProjects, setMyProjects] = useState([]);

  const getMyProjects = async () => {

    try {
      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, midasTest.abi, signer);

        const projects = await connectedContract.getUserCreatedProjects();

        if (projects.length != 0) {
          let auxList = [];

          for (let projectId of projects) {
            let project = await getProjectInfo(projectId);
            auxList.push(project);
          }

          setMyProjects(auxList);

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

        console.log(projectInfo);
        console.log("Obtained Project!");

        return projectInfo;
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setPageId('my-projects');
  }, []);

  useEffect(() => {
    if (currentAccount !== null) {
      getMyProjects();
    }
  }, [currentAccount]);

  return (
    <section id="my-projects-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="row create">
              <div className="col-md-6 information">
                <div className="information-content">
                  <h3 className="h3 c-1">
                    <b>Know how users interact with your project</b>
                  </h3>

                  <p className="description">
                    Find out through surveys or tests, how our large community
                    of tests react and interact. Customize the test to your
                    liking, filter your users and obtain the comparison of the
                    data.
                  </p>

                  <Link className="btn" to="/app/create-project">
                    Create project
                  </Link>
                </div>
              </div>

              <div className="col-md-6 image">
                <div className="image-content">
                  <img src={image3} alt="image" />
                </div>
              </div>
            </div>

            <section className="projects">
              <div className="box">
                <h5 className="h5 c-1">
                  <b>Projects</b>
                </h5>

                <div className="list-card-projects list-new-projects">
                  {myProjects.map((v, i) => (
                    <CardMyProject 
                      key={i}
                      projectDetails={v.projectDetails}
                      deadline={v.deadline}
                      status={v.status}
                    />
                  ))}
                </div>

                <div className="table-content">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Project name</th>
                        <th>Status</th>
                        <th>Category</th>
                        <th>Created</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myProjects.map((v, i) => {
                          const details = JSON.parse(v.projectDetails);
                          const expired = Date.now() > v.deadline.toNumber()*1000;
                          console.log(expired);
                          return <tr key={i}>
                            <td>{details.title}</td>
                            <td>{expired ? "Closed" : PROJECT_STATUS_DICT[v.status.toString()]}</td>
                            <td>{CATEGORY_DICT[details.category]}</td>
                            <td>{new Date(v.createdAt.toNumber()*1000).toLocaleString("en", DATE_OPTIONS)}</td>
                            <td className="more">
                              <Link to="#!">{PROJECT_STATUS_ACTIONS_DICT[v.status.toString()]}</Link>
                            </td>
                          </tr>
                        })
                      }
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

export default MyProjects;
