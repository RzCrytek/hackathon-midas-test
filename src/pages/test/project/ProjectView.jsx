import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext';
import { CATEGORY_DICT, CONTRACT_ADDRESS, DATE_OPTIONS } from '../../../utils/constants/constants';
import midasTest from '../../../utils/json/MidasTest.json';
import Layout from './Layout';

import icoCalendar from '/src/images/icons/calendar.svg';
import icoCoin from '/src/images/icons/coin.svg';

const ProjectView = () => {

  const { currentAccount, userData } = useAuthContext();

  const { name } = useParams();

  const [project, setProject] = useState(null);
  const [projectOwnerName, setProjectOwnerName] = useState(null);

  const [projectDetails, setProjectDetails] = useState(null);
  const [reward, setReward] = useState(null);

  const [isOwner, setIsOwner] = useState(false);

  const [userEnrollments, setUserEnrollments] = useState([]);
  const [alreadyEnrolled, setAlreadyEnrolled] = useState(false);
  const [enrollmentId, setEnrollmentId] = useState(null);

  const getProjectInfo = async () => {
    try {
      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, midasTest.abi, signer);

        const projectInfo = await connectedContract.getProjectInfo(parseInt(name));
        const projectOwner = await connectedContract.getProjectOwnerName(parseInt(name));

        console.log(projectInfo);
        console.log("Obtained Project!");

        setProject(projectInfo);
        setProjectOwnerName(projectOwner);
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

  const enrollToProject = async () => {
    try {
      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, midasTest.abi, signer);

        let enrollToProjectTxn = await connectedContract.enrollToProject(
          parseInt(name),
        );

        console.log("Executing the transaction...");

        await enrollToProjectTxn.wait();

        console.log("Done!");

        getCurrentUserEnrollments();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (currentAccount !== null) {
      getProjectInfo();
      getCurrentUserEnrollments();
    }
  }, [currentAccount]);

  useEffect(() => {
    if (userData && projectOwnerName) {
      console.log(userData.nickname, projectOwnerName);
      if (userData.nickname === projectOwnerName) {
        setIsOwner(true);
      } else {
        setIsOwner(false);
      }
    } else {
      setIsOwner(false);
    }
  }, [userData, projectOwnerName]);

  useEffect(() => {
    if (project) {
      setProjectDetails(JSON.parse(project.projectDetails));
      setReward(ethers.utils.formatEther(project.investment.div(project.maxTestersQuantity).toString()));
    }
  }, [project]);

  useEffect(() => {
    for (let enrollment of userEnrollments) {
      if (enrollment[1].id.toString() === name) {
        setAlreadyEnrolled(true);
        setEnrollmentId(enrollment[0].id.toString());
      } else {
        setAlreadyEnrolled(false);
      }
    }
  }, [userEnrollments]);

  return (
    <Layout pageId="projectView" projectDetails={projectDetails} isOwner={isOwner} alreadyEnrolled={alreadyEnrolled} enrollmentId={enrollmentId} enrollToProject={enrollToProject}>
      <div className="box">
        <p className="c-bot">
          <b className="medium">Description</b>
        </p>

        <p className="description">
          {projectDetails ? projectDetails.description : ""}
        </p>

        <p className="category">
          <b className="c-bot">Category: </b>
          <span className="tag">{projectDetails ? CATEGORY_DICT[projectDetails.category] : null}</span>
        </p>

        <div className="info">
          <p>
            <img src={icoCalendar} alt="ico calendar" />
            Until {project ? new Date(project.deadline.toNumber()*1000).toLocaleString("en", DATE_OPTIONS) : null}
          </p>

          <p>
            <img src={icoCoin} alt="ico coin" />
            {reward ? reward : null} MATIC
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectView;
