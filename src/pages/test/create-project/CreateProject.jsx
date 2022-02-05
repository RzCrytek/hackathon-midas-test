import React, { useState } from 'react';

import Layout from './Layout';
import Step1ProjectData from './steps/Step1ProjectData';
import Step2TypeQuestions from './steps/Step2TypeQuestions';
import Step3UserInformation from './steps/Step3UserInformation';
import Step4Investment from './steps/Step4Investment';

const CreateProject = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabSwitch = (activeTab) => {
    switch (activeTab) {
      case 'tab1':
        return <Step1ProjectData />;

      case 'tab2':
        return <Step2TypeQuestions />;

      case 'tab3':
        return <Step3UserInformation />;

      case 'tab4':
        return <Step4Investment />;

      default:
        return <Step1ProjectData />;
    }
  };

  return (
    <Layout pageId="create-project">
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
                    <b>Project data</b>
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
