import React, { useEffect, useState } from 'react';
import { compileString } from 'sass';
import { IPFS_CLIENT } from '../../../../utils/constants/constants';

import imgCover from '/src/images/image-cover.png';

const Step1ProjectData = (props) => {

  const handleTitleChange = e => {
    let title = e.target.value;

    props.setProjectDetails(
      prevState => ({
        ...prevState,
        title: title
      })
    );
  }

  const handleDescriptionChange = e => {
    let description = e.target.value;

    props.setProjectDetails(
      prevState => ({
        ...prevState,
        description: description
      })
    );
  }

  const handleCategoryChange = e => {
    let category = e.target.value;

    props.setProjectDetails(
      prevState => ({
        ...prevState,
        category: category
      })
    );
  }

  const handleDeadlineChange = e => {
    let deadline = e.target.value;

    props.setDeadline(Date.parse(deadline)/1000);
  }

  const handleAgreementChange = async (e) => {
    let file = e.target.files[0];
    try {
      const added = await IPFS_CLIENT.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      props.setProjectDetails(
        prevState => ({
          ...prevState,
          agreementUrl: url
        })
      );
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }

  const handleProjectImagesChange = async (e) => {
    let files = e.target.files;
    try {
      for (let file of files) {
        const added = await IPFS_CLIENT.add(file);
        const url = `https://ipfs.infura.io/ipfs/${added.path}`;
        props.setProjectDetails(
          prevState => ({
            ...prevState,
            projectImages: [...prevState.projectImages, {
              url: url
            }]
          })
        );
      }
    } catch (error) {
      console.log('Error uploading file', error);
    }
  }

  const handleProjectImageUrlAdd = async (e) => {
    e.preventDefault();
    const {url} = e.target.elements;
    if (url.value !== "") {
      props.setProjectDetails(
        prevState => ({
          ...prevState,
          projectImages: [...prevState.projectImages, {
            url: url.value
          }]
        })
      );
    }
  }

  const selectCover = (idx) => {
    const auxList = [...props.projectDetails.projectImages];

    for (let image in auxList) {
      if (parseInt(image) !== idx) {
        delete auxList[image].cover;
      } else {
        auxList[image].cover = true;
      }
    }

    props.setProjectDetails(
      prevState => ({
        ...prevState,
        projectImages: auxList
      })
    );
  }

  const nextStep = () => {
    if (props.completed) {
      props.setActiveTab('tab2');
    } else {
      alert("Please complete every field before going to next step.")
    }
  }

  return (
    <div id="step-1">
      <div className="row step-row-content">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Tittle project
            </label>
            <input className="form-control" type="text" placeholder="Name" onChange={handleTitleChange} />
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
              onChange={handleDescriptionChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Category
            </label>
            <select id="" className="form-control" name="" defaultValue=""
              onChange={handleCategoryChange}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="ADD">Advertising</option>
              <option value="SMD">Social media</option>
              <option value="TRT">Travels & tourism</option>
              <option value="ARC">Architecture</option>
              <option value="DPR">Digital products</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Deadline
            </label>
            <input className="form-control" type="date" onChange={handleDeadlineChange}/>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Confidentiality agreement
            </label>
            <input className="form-control" type="file" onChange={handleAgreementChange}/>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Add image or prototype
            </label>
            <input className="form-control" type="file" onChange={handleProjectImagesChange}/>
          </div>

          <div className="form-group grouped">
            <label className="form-label" htmlFor="">
              or link
            </label>

            <div className="group">
              <form style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} onSubmit={handleProjectImageUrlAdd}>
                <input
                  className="form-control"
                  type="url"
                  placeholder="https://imgur.com/LP5Pl2T.jpg"
                  name="url"
                />
                <input className="btn btn--orange w-auto" value="Add" type="submit"/>
              </form>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Select the cover
            </label>

            <div className="list-cover">
              {props.projectDetails.projectImages.map((v, i) => (
                <div className="cover" key={i}>
                  <img src={v.url} alt="imagen cover" onClick={() => {selectCover(i)}} />
                  {v.cover ? <p>Cover selected</p> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="step-footer">
        <button className="btn btn--yellow" type="button" onClick={nextStep}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step1ProjectData;
