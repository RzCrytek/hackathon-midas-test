import React, { useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

import CardProject from '../../components/CardProject/CardProject';

import imgCoin from '/src/images/icons/coin.svg';

const Testing = () => {
  const { setPageId } = useOutletContext();

  useEffect(() => {
    setPageId('testing');
  }, []);

  return (
    <section id="testing-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <section className="my-tests">
              <h5 className="h5 c-1">
                <b>My test’s</b>
              </h5>

              <div className="box">
                <div className="top">
                  <p className="c-1">
                    <b className="medium">
                      Start testing all the quizzes you applied to
                    </b>
                  </p>
                  <Link to="#!">View history</Link>
                </div>

                <div className="list-card-projects list-new-projects">
                  {[...new Array(4)].map((v, i) => (
                    <CardProject key={i} />
                  ))}
                </div>
              </div>
            </section>

            <section className="open-projects">
              <h5 className="h5 c-1">
                <b>Open projects</b>
              </h5>

              <div className="box">
                <div className="search-top"></div>

                <div className="table-content">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Project name</th>
                        <th>Published by</th>
                        <th>Category</th>
                        <th>Reward</th>
                        <th>Close project</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...new Array(14)].map((v, i) => (
                        <tr key={i}>
                          <td>Shark project</td>
                          <td>Martín C.</td>
                          <td>Digital products</td>
                          <td className="td-image">
                            <img src={imgCoin} alt="ico coin" />
                            <span>0.0005 MATIC</span>
                          </td>
                          <td>01-05-2022</td>
                          <td className="more">
                            <Link to="#!">View more</Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;
