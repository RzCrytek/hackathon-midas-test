import React from 'react';

import icoEditOrange from '/src/images/icons/edit--orange.svg';

const Step2TypeQuestions = () => {
  return (
    <div id="step-2">
      <div className="row step-row-content">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Test type
            </label>
            <select id="" className="form-control" name="" defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Question or context
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Do you see ?"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Referential image
            </label>
            <select id="" className="form-control" name="" defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>

          <div className="row">
            <div className="form-group col-md-6">
              <label className="form-label" htmlFor="">
                Answer type
              </label>
              <select id="" className="form-control" name="" defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div className="form-group col-md-6">
              <label className="form-label" htmlFor="">
                Amount
              </label>
              <select id="" className="form-control" name="" defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="2">3</option>
                <option value="2">4</option>
              </select>
            </div>
          </div>

          <div className="form-group multi-input-column">
            <label className="form-label" htmlFor="">
              Add answer
            </label>

            <div className="list-inputs">
              <input
                className="form-control"
                type="text"
                placeholder="Do you see ?"
              />
              <input
                className="form-control"
                type="text"
                placeholder="Do you see ?"
              />
            </div>
          </div>

          <button className="btn btn-outline" type="button">
            Add question
          </button>
        </div>

        <div className="col-md-6">
          <p className="form-label">Created questions</p>
          <div className="list-questions-created">
            <div className="question-created">
              <div className="text">
                <p className="c-1 question">
                  <b>Why should Peru beat Uruguay?</b>
                </p>

                <div className="answer">
                  <p>Type answer: Free text</p>
                </div>
              </div>
              <div className="options">
                <button type="button">
                  <img src={icoEditOrange} alt="ico edit orange" />
                </button>
              </div>
            </div>

            <div className="question-created">
              <div className="text">
                <p className="c-1 question">
                  <b>Why should Peru beat Uruguay?</b>
                </p>

                <div className="answer">
                  <p>Type answer: Free text</p>
                  <p>Amount: 4</p>
                </div>
              </div>
              <div className="options">
                <button type="button">
                  <img src={icoEditOrange} alt="ico edit orange" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="step-footer">
        <button className="btn btn--yellow" type="button">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step2TypeQuestions;
