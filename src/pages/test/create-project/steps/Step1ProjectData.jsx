import React from 'react';

import imgCover from '/src/images/image-cover.png';

const Step1ProjectData = () => {
  return (
    <div id="step-1">
      <div className="row step-row-content">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Tittle project
            </label>
            <input className="form-control" type="text" placeholder="Name" />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Description
            </label>
            <textarea
              id=""
              className="form-control"
              name=""
              placeholder="Your information…"
              rows="7"
            ></textarea>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Category
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
              Deadline
            </label>
            <input className="form-control" type="date" />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Confidentiality agreement
            </label>
            <input className="form-control" type="file" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Add image or prototype
            </label>
            <input className="form-control" type="file" />
          </div>

          <div className="form-group grouped">
            <label className="form-label" htmlFor="">
              or link
            </label>

            <div className="group">
              <input
                className="form-control"
                type="url"
                placeholder="https://imgur.com/LP5Pl2T.jpg"
              />
              <button className="btn btn--orange w-auto" type="button">
                Add
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Select the cover
            </label>

            <div className="list-cover">
              {[...new Array(4)].map((v, i) => (
                <div className="cover" key={i}>
                  <img src={imgCover} alt="imagen cover" />
                </div>
              ))}
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

export default Step1ProjectData;
