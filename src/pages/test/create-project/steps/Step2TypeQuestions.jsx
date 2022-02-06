import React, { useEffect, useState } from 'react';

import icoEditOrange from '/src/images/icons/edit--orange.svg';

const Step2TypeQuestions = (props) => {

  const [currentQuestion, setCurrentQuestion] = useState({
    question: null,
  });

  const [answersQuantity, setAnswersQuantity] = useState(2);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    console.log(currentQuestion);
  }, [currentQuestion]);

  useEffect(() => {
    setAnswers([...new Array(answersQuantity)]);
  }, [answersQuantity]);

  useEffect(() => {
    setCurrentQuestion(prevState => ({
        ...prevState,
        answers: answers
      })
    )
  }, [answers]);

  const handleTestTypeSelection = e => {
    props.setTestType(e.target.value);
  }

  const handleQuestionChange = e => {
    let question = e.target.value;
    setCurrentQuestion(prevState => ({
        ...prevState,
        question: question
      })
    )
  }

  const handleRefImageSelection = e => {
    setCurrentQuestion(prevState => ({
        ...prevState,
        refImage: e.target.value
      })
    );
  }

  const handleQuestionType = e => {
    setCurrentQuestion(prevState => ({
        ...prevState,
        type: e.target.value
      })
    );
  }

  const handleAnswersQuantitySelection = e => {
    setAnswersQuantity(parseInt(e.target.value));
    console.log(answersQuantity);
  }

  const handleChangeAnswer = e => {
    console.log(e.target.name);
    const idx = parseInt(e.target.name);
    const auxList = [...answers];

    for (let answerIdx in auxList) {
      if (parseInt(answerIdx) === idx) {
        auxList[idx] = e.target.value;
      }
    }

    setAnswers(auxList);
  }

  const handleAddQuestion = e => {
    props.setProjectQuestions(prevState => [
      ...prevState,
      currentQuestion
    ])
    setCurrentQuestion({
      question: null
    });
  }

  const nextStep = e => {
    if (!props.completed) {
      alert("Complete this step correctly before going forward.");
    } else {
      props.setActiveTab('tab3');
    }
  }

  return (
    <div id="step-2">
      <div className="row step-row-content">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Test type
            </label>
            <select id="" className="form-control" name="" defaultValue="" onChange={handleTestTypeSelection}>
              <option value="" disabled>
                Select
              </option>
              <option value="QUESTIONS">Questions & answers</option>
              <option value="RATING">Rating & comments</option>
            </select>
          </div>

          {props.testType === "QUESTIONS" ? <div className="form-group">
            <label className="form-label" htmlFor="">
              Question or context
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Do you see ?"
              onChange={handleQuestionChange}
            />
          </div> : null}

          {props.testType === "QUESTIONS" ? <div className="form-group">
            <label className="form-label" htmlFor="">
              Referential image
            </label>
            <select id="" className="form-control" name="" defaultValue="" onChange={handleRefImageSelection}>
              <option value="" disabled>
                Select
              </option>
              {props.projectImages.map((v, i) => {
                console.log(v.url);
                return <option value={v.url} key={i}>Image {i}</option>
              })}
            </select>
          </div> : null}

          {props.testType === "QUESTIONS" ? <div className="row">
            <div className="form-group col-md-6">
              <label className="form-label" htmlFor="">
                Answer type
              </label>
              <select id="" className="form-control" name="" defaultValue="" onChange={handleQuestionType}>
                <option value="" disabled>
                  Select
                </option>
                <option value="FREE">Free text</option>
                <option value="MULTIPLE">Multiple options</option>
              </select>
            </div>

            {currentQuestion.type === "MULTIPLE" ? <div className="form-group col-md-6">
              <label className="form-label" htmlFor="">
                Amount
              </label>
              <select id="" className="form-control" name="" defaultValue="" onChange={handleAnswersQuantitySelection}>
                <option value="" disabled>
                  Select
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div> : null}
          </div> : null }

          {props.testType === "QUESTIONS" && currentQuestion.type === "MULTIPLE" ? <div className="form-group multi-input-column">
            <label className="form-label" htmlFor="">
              Answers
            </label>

            <div className="list-inputs">
              {answers.map((v, i) => {
                return <input
                  className="form-control"
                  type="text"
                  placeholder={`Answer ${i}`}
                  key={i}
                  name={i}
                  value={v}
                  onChange={handleChangeAnswer}
                />
              })}
            </div>
          </div> : null}

          {props.testType === "QUESTIONS" ? <button className="btn btn-outline" type="button" onClick={handleAddQuestion}>
            Add question
          </button>: null}
        </div>

        {props.testType === "QUESTIONS" ? <div className="col-md-6">
          <p className="form-label">Created questions</p>
          <div className="list-questions-created">
            
            {props.projectQuestions.map((v, i) => {
              return <div className="question-created" key={i}>
                <div className="text">
                  <p className="c-1 question">
                    <b>{v.question}</b>
                  </p>

                  <div className="answer">
                    <p>Type answer: {v.type}</p>
                  </div>
                </div>
                <div className="options">
                  <button type="button">
                    <img src={icoEditOrange} alt="ico edit orange" />
                  </button>
                </div>
              </div>
            })}
          </div>
        </div> : null}
      </div>

      <div className="step-footer">
        <button className="btn btn--yellow" type="button" onClick={nextStep}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step2TypeQuestions;
