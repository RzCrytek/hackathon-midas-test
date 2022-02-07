import React, { useEffect, useState } from 'react';

import Layout from './Layout';
import Step1ProjectData from './steps/Step1ProjectData';
import Step2TypeQuestions from './steps/Step2TypeQuestions';
import Step3UserInformation from './steps/Step3UserInformation';
import Step4Investment from './steps/Step4Investment';

const CreateProject = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const [step1Complete, setStep1Complete] = useState(false);
  const [step2Complete, setStep2Complete] = useState(false);
  const [step3Complete, setStep3Complete] = useState(false);
  const [step4Complete, setStep4Complete] = useState(false);


  const [projectDetails, setProjectDetails] = useState(
    {
      title: null,
      description: null,
      category: null,
      agreementUrl: null,
      projectImages: []
    }
  );

  const [restrictionDetails, setRestrictionDetails] = useState(
    {
      minAge: null,
      maxAge: null,
      targetCountry: null,
      minimumCompletion: null
    }
  );

  const [deadline, setDeadline] = useState(null);
  const [testType, setTestType] = useState(null);
  const [projectQuestions, setProjectQuestions] = useState([]);
  const [maxTesters, setMaxTesters] = useState(null);
  const [investment, setInvestment] = useState(null);

  useEffect(() => {
    setStep1Complete(Object.values(projectDetails).every(x => x !== null && x.length !== 0 && x !== '') && deadline)
  }, [projectDetails, deadline]);

  useEffect(() => {
    setStep3Complete(Object.values(restrictionDetails).every(x => x !== null && x.length !== 0 && x !== '') && maxTesters)
  }, [restrictionDetails, maxTesters]);

  useEffect(() => {
    setStep2Complete(
      testType !== null &&
      (
        (testType === "QUESTIONS" &&
        projectQuestions.length > 0) ||
        testType === "RATING"
      )
    );
  }, [projectQuestions, testType]);

  useEffect(() => {
    setStep4Complete(investment >= 1);
  }, [investment])

  useEffect(() => {
    if (step4Complete) {
      console.log(projectDetails);
      console.log(restrictionDetails);
      console.log(deadline);
      console.log(testType);
      console.log(projectQuestions);
      console.log(maxTesters);
      console.log(investment);
    }
  }, [step4Complete]);

  const tabSwitch = (activeTab) => {
    switch (activeTab) {
      case 'tab1':
        return <Step1ProjectData 
          projectDetails={projectDetails}
          setProjectDetails={setProjectDetails}
          setDeadline={setDeadline}
          completed={step1Complete}
          setActiveTab={setActiveTab}
        />;

      case 'tab2':
        return <Step2TypeQuestions 
          testType={testType}
          setTestType={setTestType}
          projectImages={projectDetails.projectImages}
          projectQuestions={projectQuestions}
          setProjectQuestions={setProjectQuestions}
          setActiveTab={setActiveTab}
          completed={step2Complete}
        />;

      case 'tab3':
        return <Step3UserInformation 
          setRestrictionDetails={setRestrictionDetails}
          setMaxTesters={setMaxTesters}
          setActiveTab={setActiveTab}
          completed={step3Complete}
        />;

      case 'tab4':
        return <Step4Investment 
          setInvestment={setInvestment}
          investment={investment}
        />;

      default:
        return <Step1ProjectData />;
    }
  };

  const values = {
    projectDetails,
    restrictionDetails,
    deadline,
    testType,
    projectQuestions,
    maxTesters,
    investment
  }

  return (
    <Layout pageId="create-project" ready={step4Complete} values={values}>
      <div id="create-project-wrap" className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="step-content">
              <div className="step-content-menu">
                <div
                  className={`step-menu step-menu-1 ${
                    activeTab === 'tab1' ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab('tab1')}
                >
                  <p className="step-number">
                    <b className="medium"> Step 1</b>
                  </p>

                  <p className="step-name">
                    <b>Project data {step1Complete ? null : null}</b>
                  </p>
                </div>

                <div
                  className={`step-menu step-menu-2 ${
                    activeTab === 'tab2' ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab('tab2')}
                >
                  <p className="step-number">
                    <b className="medium"> Step 2</b>
                  </p>

                  <p className="step-name">
                    <b>Type & questions</b>
                  </p>
                </div>

                <div
                  className={`step-menu step-menu-3 ${
                    activeTab === 'tab3' ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab('tab3')}
                >
                  <p className="step-number">
                    <b className="medium"> Step 3</b>
                  </p>

                  <p className="step-name">
                    <b>User information</b>
                  </p>
                </div>

                <div
                  className={`step-menu step-menu-4 ${
                    activeTab === 'tab4' ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab('tab4')}
                >
                  <p className="step-number">
                    <b className="medium"> Step 4</b>
                  </p>

                  <p className="step-name">
                    <b>Investment</b>
                  </p>
                </div>
              </div>

              <div className="step-content-body">
                <div className="box">{tabSwitch(activeTab)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProject;
