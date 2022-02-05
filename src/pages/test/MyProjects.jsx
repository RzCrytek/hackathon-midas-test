import React, { useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

import CardMyProject from '../../components/CardMyProject/CardMyProject';

import image3 from '/src/images/image-3.png';
import imgCoin from '/src/images/icons/coin.svg';

const MyProjects = () => {
  const { setPageId } = useOutletContext();

  useEffect(() => {
    setPageId('my-projects');
  }, []);

  return (
    <section id="my-projects-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="row create">
              <div className="col-md-6 information">
                <div className="information-content">
                  <h3 className="h3 c-1">
                    <b>Know how users interact with your project</b>
                  </h3>

                  <p className="description">
                    Find out through surveys or tests, how our large community
                    of tests react and interact. Customize the test to your
                    liking, filter your users and obtain the comparison of the
                    data.
                  </p>

                  <Link className="btn" to="#!">
                    Create project
                  </Link>
                </div>
              </div>

              <div className="col-md-6 image">
                <div className="image-content">
                  <img src={image3} alt="image" />
                </div>
              </div>
            </div>

            <section className="projects">
              <div className="box">
                <h5 className="h5 c-1">
                  <b>Projects</b>
                </h5>

                <div className="list-card-projects list-new-projects">
                  {[...new Array(4)].map((v, i) => (
                    <CardMyProject key={i} />
                  ))}
                </div>

                <div className="table-content">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Project name</th>
                        <th>Status</th>
                        <th>Category</th>
                        <th>Created</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...new Array(14)].map((v, i) => (
                        <tr key={i}>
                          <td>Shark project</td>
                          <td>Open</td>
                          <td>Travels & tourism</td>
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

export default MyProjects;
