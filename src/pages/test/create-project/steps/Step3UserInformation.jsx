import React from 'react';

const Step3UserInformation = (props) => {

  const handleMinAgeChange = e => {
    props.setRestrictionDetails(prevState => ({
        ...prevState,
        minAge: parseInt(e.target.value)
      })
    );
  }

  const handleMaxAgeChange = e => {
    props.setRestrictionDetails(prevState => ({
        ...prevState,
        maxAge: parseInt(e.target.value)
      })
    );
  }

  const handleTargetCountryChange = e => {
    props.setRestrictionDetails(prevState => ({
        ...prevState,
        targetCountry: e.target.value
      })
    );
  }

  const handleMinimumCompletionChange = e => {
    props.setRestrictionDetails(prevState => ({
        ...prevState,
        minimumCompletion: parseInt(e.target.value)
      })
    );
  }

  const handleMaxTestersChange = e => {
    props.setMaxTesters(parseInt(e.target.value));
  }

  const nextStep = e => {
    if (!props.completed) {
      alert("Complete this step before moving forward.")
    } else {
      props.setActiveTab('tab4');
    }
  }

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
                <input
                className="form-control"
                type="number"
                placeholder="Min Age..."
                onChange={handleMinAgeChange}
                />
              </div>

              <div className="form-group col-md-6">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Max age..."
                  onChange={handleMaxAgeChange}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Country
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Ex. PERU"
              onChange={handleTargetCountryChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Max testers
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="Number..."
              onChange={handleMaxTestersChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Minimum completed test
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="Number..."
              onChange={handleMinimumCompletionChange}
            />
          </div>
        </div>

        <div className="col-md-6"></div>
      </div>

      <div className="step-footer">
        <button className="btn btn--yellow" type="button" onClick={nextStep}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step3UserInformation;
