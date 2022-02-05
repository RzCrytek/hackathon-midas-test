import React from 'react';

import logoMeta from '/src/images/logo-metamask.svg';
import icoInfo from '/src/images/icons/info.svg';
import icoConfirmed from '/src/images/icons/confirmed.svg';

const Step4Investment = () => {
  return (
    <div id="step-4">
      <div className="row step-row-content">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label label-ico" htmlFor="">
              Investment amount
              <p title="5% of the amount goes to the platform fee and the rest is divided by the number of testers. If the total number of testers is not completed, the remaining amount will be returned to the creator of the project.">
                <img src={icoInfo} alt="ico info" />
              </p>
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="Number..."
            />
          </div>

          <button className="btn btn--yellow btn-transfer" type="button">
            <img src={logoMeta} alt="Logo Metamask" />
            <span>Transfer from my wallet</span>
          </button>

          <div className="investment-details">
            <div className="item">
              <p>
                <b>Investment details</b>
              </p>

              <table>
                <tr>
                  <td>Investment:</td>
                  <td>200 MATIC</td>
                </tr>
                <tr>
                  <td>Plataform fee:</td>
                  <td>10 MATIC</td>
                </tr>
                <tr>
                  <td>Gas fees:</td>
                  <td>5 MATIC</td>
                </tr>
                <tr>
                  <td colspan="2" height="16px"></td>
                </tr>
                <tr>
                  <td>
                    <b>TOTAL:</b>
                  </td>
                  <td>
                    <b>215 MATIC</b>
                  </td>
                </tr>
              </table>

              <p className="confirmed">
                <img src={icoConfirmed} alt="ico confirmed" />
                <b>confirmed</b>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default Step4Investment;
