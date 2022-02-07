import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext';
import { CONTRACT_ADDRESS } from '../../../utils/constants/constants';
import midasTest from '../../../utils/json/MidasTest.json';
import Layout from './Layout';

const ProjectTesting = () => {

  const { currentAccount } = useAuthContext();

  const { name, eid } = useParams();

  const [project, setProject] = useState(null);

  const [projectDetails, setProjectDetails] = useState(null);
  const [questions, setQuestions] = useState(null);

  const [stepQuestions, setStepQuestions] = useState(false);
  const [answers, setAnswers] = useState({});

  const [currentQuestionImage, setCurrentQuestionImage] = useState(null);

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

  const updateEnrollment = async (e) => {

    console.log(answers);
    
    try {
      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, midasTest.abi, signer);

        let updateEnrollmentTxn = await connectedContract.updateEnrollmentResult(
          parseInt(parseInt(eid)),
          parseInt(1),
          JSON.stringify(answers)
        );

        console.log("Executing the transaction...");

        await updateEnrollmentTxn.wait();

        alert(`Great! You've won ${ethers.utils.formatEther(project.investment.div(project.maxTestersQuantity).toString())} MATIC for testing this project.`);
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

  useEffect(() => {
    if (projectDetails !== null) {
      setQuestions(JSON.parse(project.questions));
    }
  }, [projectDetails])

  const handleOnAnswer = (e) => {
    const n = e.target.name;
    const v = e.target.value;
    
    const auxDict = {...answers}

    auxDict[n] = v;

    setAnswers(auxDict);
  }

  const handleOnSetComment = (e) => {
    const v = e.target.value;
    
    const auxDict = {...answers}

    auxDict['comments'] = v;

    setAnswers(auxDict);
  }

  const handleOnSetRate = (e) => {
    const v = e.target.value;
    
    const auxDict = {...answers}

    auxDict['rate'] = v;

    setAnswers(auxDict);
  }

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  return (
    <Layout pageId="projectTesting" projectDetails={projectDetails}>
      <div className="box">
        <div className="image" style={{overflow: "hidden"}}>
          {
            !stepQuestions || project.testType === "RATING" || currentQuestionImage === null ?
            projectDetails ? <img src={projectDetails.projectImages.filter(image => image.cover === true)[0].url}></img> : null :
            null
          }
        </div>
        <div className="information">
          <div className="information-content">
            {!stepQuestions ? 
              <div className="step-description">
                <h6 className="h6">Description</h6>
                <p className="description">
                  {projectDetails ? projectDetails.description : null}
                </p>

                <button className="btn btn--orange" type="button" onClick={() => setStepQuestions(true)}>
                  Continue
                </button>
              </div> :
              project.testType === "RATING" ?
              <div>
                <label className="form-label" htmlFor="">
                  Project rate
                </label>
                <input type="number" className="form-control" placeholder='Rate the project from 0 to 5'/>
        
                <label className="form-label" htmlFor="">
                  Comments
                </label>
                <textarea
                  id=""
                  className="form-control"
                  name=""
                  placeholder="Your comments"
                  rows="7"
                ></textarea>
                <button className="btn btn--orange" type="button" onClick={updateEnrollment}>
                  Upload
                </button>
              </div> : 
              <div>{questions.map((v, i) => {
                if (v.type === "FREE") {
                  return <div key={i}>
                    <p>Question: {v.question}</p>
                    <textarea
                      id=""
                      className="form-control"
                      name={i}
                      placeholder="Your comments"
                      rows="7"
                      onChange={handleOnAnswer}
                    ></textarea>
                  </div>
                } else {
                  return <div key={i} style={{marginBottom: "10px"}}>
                    <p>Question: {v.question}</p>
                    <div onChange={handleOnAnswer}>
                    {
                      v.answers.map((w, idx) => {
                        return <label key={idx} style={{marginBottom: "5px"}}>
                          {w}
                          <input type="radio" value={w} name={i}/>
                          <br></br>
                        </label>
                      })
                    }
                    </div>
                  </div>
                }
              })}
              <label className="form-label" htmlFor="">
                  Project rate
                </label>
                <input type="number" className="form-control" placeholder='Rate the project from 0 to 5' onChange={handleOnSetRate}/>
        
                <label className="form-label" htmlFor="">
                  Comments
                </label>
                <textarea
                  id=""
                  className="form-control"
                  name=""
                  placeholder="Your comments"
                  rows="7"
                  onChange={handleOnSetComment}
                ></textarea>
                <button className="btn btn--orange" type="button" onClick={updateEnrollment}>
                  Upload
                </button>
              </div>
            }

            {/* <div className="step-testing">las preguntas para el testing</div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectTesting;
