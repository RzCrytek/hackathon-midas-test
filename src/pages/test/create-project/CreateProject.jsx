import React from 'react';

import Layout from './Layout';
import Step1ProjectData from './steps/Step1ProjectData';

const CreateProject = () => {
  return (
    <Layout pageId="create-project">
      <div id="create-project-wrap" className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="step-content">
              <div className="step-content-menu">
                <div className="step-menu step-menu-1">
                  <p className="c-yellow">
                    <b className="medium"> Step 1</b>
                  </p>

                  <p className="c-1">
                    <b>Project data</b>
                  </p>
                </div>

                <div className="step-menu step-menu-2">
                  <p className="c-yellow">
                    <b className="medium"> Step 2</b>
                  </p>

                  <p className="c-1">
                    <b>Type & questions</b>
                  </p>
                </div>

                <div className="step-menu step-menu-3">
                  <p className="c-yellow">
                    <b className="medium"> Step 3</b>
                  </p>

                  <p className="c-1">
                    <b>User information</b>
                  </p>
                </div>

                <div className="step-menu step-menu-4">
                  <p className="c-yellow">
                    <b className="medium"> Step 4</b>
                  </p>

                  <p className="c-1">
                    <b>Investment</b>
                  </p>
                </div>
              </div>

              <div className="step-content-body">
                <div className="box">
                  <Step1ProjectData />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProject;
