import React from 'react';

const Step3UserInformation = () => {
  return (
    <div id="step-3">
      <div className="row step-row-content">
        <div className="col-md-6">
          <div className="form-group-age">
            <label className="form-label" htmlFor="">
              Age range
            </label>

            <div className="row">
              <div className="form-group col-md-6">
                <select id="" className="form-control" name="" defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </select>
              </div>

              <div className="form-group col-md-6">
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
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Country
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
              Max tester
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="Number..."
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Minimum completed test
            </label>
            <select id="" className="form-control" name="" defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>
        </div>

        <div className="col-md-6"></div>
      </div>

      <div className="step-footer">
        <button className="btn btn--yellow" type="button">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step3UserInformation;
