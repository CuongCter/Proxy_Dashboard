import React, { useEffect, useState } from "react";
import "../assets/scss/pages/_dashboard.scss";
import Admin from "../components/Admin/Admin";
import IconPort from "../assets/images/overview/Port.png";
import IconBandWidth from "../assets/images/overview/Bandwidth.png";
import IconDollar from "../assets/images/overview/$.png";
import PlansBillings from "../components/pland_bill/PlansBillings";
import { apiGetBillings, apiGetUserInfo } from "../services/api_helper";
import { formatBytes } from "../services/utils";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [billings, setBillings] = useState([]);

  const getUser = async () => {
    try {
      const res = await apiGetUserInfo();
      if (res.success && res.data) {
        setUser(res.data.result);
        await getBillings();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getBillings = async () => {
    try {
      const res = await apiGetBillings();
      if (res.success && res.data) {
        setBillings(res.data.result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user == null) {
      getUser();
    }
  }, []);

  return (
    <div className="dashboard">
      {
        user ? (
          <>
            <div className="dashboard__admin">
              <Admin></Admin>
            </div>
            <div className="dashboard__overview">
              <h1 className="dashboard__overview-title">OVERVIEW</h1>
            </div>
            <div className="dashboard__overview-main">
              <div className="dashboard__overview-main-port box">
                <div className="port__icon">
                  <img src={IconPort} alt="" />
                </div>
                <div className="port__content">
                  <div className="port__content-active">
                    <div className="port__content-active-title">
                      Active Port:
                    </div>
                    <div className="port__content-active-total">
                      {user.numPorts}
                    </div>
                  </div>
                  <div className="port__content-unused">
                    <div className="port__content-unused-title">
                      Unused Port:
                    </div>
                    <div className="port__content-unused-total">
                      {user.totalPorts - user.numPorts < 0
                        ? 0
                        : user.totalPorts - user.numPorts}
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard__overview-main-bandwidth box">
                <div className="bandwidth__icon">
                  <img src={IconBandWidth} alt="" />
                </div>
                <div className="bandwidth__content">
                  <h1 className="bandwidth__content-title">
                    Available Bandwidth:
                  </h1>
                  <h1 className="bandwidth__content-total">
                    {formatBytes(user.totalBandwidth)}
                  </h1>
                  <p className="bandwidth__content-more">+ Buy Bandwidth</p>
                </div>
              </div>
              <div className="dashboard__overview-main-balance box">
                <div className="balance__icon">
                  <img src={IconDollar} alt="" />
                </div>
                <div className="balance__content">
                  <div className="balance__content-total">
                    <div className="balance__content-total-title">Balance:</div>
                    <div className="balance__content-total-sum">
                      ${user.balance}
                    </div>
                  </div>
                  <button className="balance__content-topup">+ Top-up</button>
                </div>
              </div>
            </div>
            <div className="dashboard__plansBillings">
              <h1 className="dashboard__plansBillings-title">
                PLANS & BILLINGS
              </h1>
              <div className="dashboard__plansBillings-content">
                <PlansBillings billings={billings} />
              </div>
            </div>
          </>
        ) : null //Loading
      }
    </div>
  );
};

export default Dashboard;
