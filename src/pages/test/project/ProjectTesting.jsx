import React from 'react';
import Layout from './Layout';

const ProjectTesting = () => {
  return (
    <Layout pageId="projectTesting">
      <div className="box">
        <div className="image"></div>
        <div className="information">
          <div className="information-content">
            <div className="step-description">
              <h6 className="h6">Description</h6>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                semper interdum elit vitae eleifend. Phasellus ut elit
                condimentum, facilisis metus sed, condimentum tortor. Nulla ut
                sapien at nisl sollicitudin tempor in vitae purus. Mauris
                blandit finibus sapien, eget fringilla enim porttitor vel. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
                interdum elit vitae eleifend. Phasellus ut elit condimentum,
                facilisis metus sed, condimentum tortor. Nulla ut sapien at nisl
                sollicitudin tempor in vitae purus. Mauris blandit finibus
                sapien, eget fringilla enim porttitor vel.
              </p>

              <button className="btn btn--orange" type="button">
                Continue
              </button>
            </div>

            <div className="step-testing">las preguntas para el testing</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectTesting;
