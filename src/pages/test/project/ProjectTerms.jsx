import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext';
import { CONTRACT_ADDRESS } from '../../../utils/constants/constants';
import midasTest from '../../../utils/json/MidasTest.json';
import Layout from './Layout';

const ProjectTerms = () => {

  const { currentAccount } = useAuthContext();

  const { name, eid } = useParams();

  const [project, setProject] = useState(null);

  const [projectDetails, setProjectDetails] = useState(null);

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

        setProject(projectInfo);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (currentAccount !== null) {
      getProjectInfo(parseInt(name));
    }
  }, [currentAccount])

  useEffect(() => {
    if (project !== null) {
      setProjectDetails(JSON.parse(project.projectDetails));
    }
  }, [project])

  return (
    <Layout pageId="projectTerms" projectDetails={projectDetails}>
      <div className="box">
        <div className="terms-content">
          <h5 className="h5 c-1">
            <b>Confidentiality document</b>
          </h5>
          <div className="description">
            {projectDetails ? <iframe src={projectDetails.agreementUrl} style={{width: "100%", height: "400px"}}></iframe> : null}
          </div>

          <Link className="btn" to={`/app/project/${name}/enrollment/${eid}/testing`}>
            Accept
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectTerms;
