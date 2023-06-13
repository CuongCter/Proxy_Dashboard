import React, { useEffect, useState } from "react";
import "../assets/scss/pages/_buyBandwidth.scss";
import storageService from "../services/storage.service";
import { pricingSession } from "../common/const.config";
import { apiBuyBandwidth, apiGetPricing } from "../services/api_helper";
import { showNotification } from "../components/notifications";
const BuyBandwidth = () => {
  const [pricings, setPricings] = useState([]);
  const [bandwidth, setBandwidth] = useState(0);
  const [amount, setAmount] = useState(0);
  const [month, setMonth] = useState(1);
  const [rate, setRate] = useState(0);

  const genDes = (bandwidth, month) => {
    try {
      const pricing = pricings.find(
        (e) =>
          e.minBandwidth <= bandwidth &&
          e.maxBandwidth >= bandwidth &&
          e.month == month
      );
      if (pricing) {
        setAmount(pricing.price * bandwidth);
        setRate(pricing.price);
      } else {
        setAmount(0);
        setRate(0);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getPricing = async () => {
    try {
      const sessionPricing = storageService.getSessionObject(pricingSession);
      if (sessionPricing == null) {
        const res = await apiGetPricing();
        if (res.success && res.data) {
          setPricings(res.data.result);
          storageService.setSessionObject(pricingSession, res.data.result);
        } else {
          showNotification("danger", "Pricing", "Pricing not found!");
        }
      } else {
        setPricings(sessionPricing);
      }
      genDes(pricings[0], month);
    } catch (err) {
      console.log(err);
    }
  };

  const buyBandwidth = async () => {
    try {
      const pricing = pricings.find(
        (e) =>
          e.minBandwidth <= bandwidth &&
          e.maxBandwidth >= bandwidth &&
          e.month == month
      );
      if (pricing) {
        const res = await apiBuyBandwidth(bandwidth, month);
        if (res.success && res.data) {
          showNotification("success", "Buy Bandwidth Success!");
        } else {
          showNotification("danger", "Buy Bandwidth", res.errors);
          console.log(res.errors);
        }
      } else {
        showNotification("danger", "Buy Bandwidth", "Pricing not found!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPricing();
  }, []);

  return (
    <div className="bandwidth">
      <div className="bandwidth__popup">
        <div className="bandwidth__popup-header">
          <h1 className="bandwidth__popup-header-title">BUY BANDWIDTH</h1>
          <div className="bandwidth__popup-header-close">x</div>
        </div>
        <div className="bandwidth__popup-main">
          <div className="bandwidth__popup-main-amount">
            <h3 className="bandwidth__popup-main-amount-title">Bandwidth</h3>
            <input
              value={bandwidth}
              onChange={(event) => {
                genDes(event.target.value, month);
                setBandwidth(event.target.value);
              }}
              className="bandwidth__popup-main-amount-input"
              placeholder="Enter here"
              type="number"
            ></input>
          </div>
          <div className="bandwidth__popup-main-type">
            <div className="bandwidth__popup-main-type-title">Type</div>
            <div className="bandwidth__popup-main-type-option">
              <p className="bandwidth__popup-main-type-option-note">
                Amount: {amount}$, Price {rate}$/GB
              </p>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <input type="radio" name="bandwidth" />
                <label className="label_bandwidth" for="bandwidth">
                  Buy new bandwidth
                </label>
              </div>
              <div style={{ display: "flex" }}>
                <input type="radio" name="bandwidth" />
                <label className="label_bandwidth" for="bandwidth">
                  Add more bandwidth
                </label>
              </div>
            </div>
          </div>
          <div className="bandwidth__popup-main-period">
            <h3 className="bandwidth__popup-main-period-title">Period:</h3>
            <select
              onChange={(event) => {
                setMonth(event.target.value);
                genDes(bandwidth, event.target.value);
              }}
              className="bandwidth__popup-main-period-select"
              type="text"
            >
              <option className="select-option" value="1" selected>
                1 month
              </option>
              <option className="select-option" value="2">
                2 months
              </option>
              <option className="select-option" value="3">
                3 months
              </option>
            </select>
          </div>
        </div>
        <button
          onClick={async () => {
            await buyBandwidth();
          }}
          className="bandwidth__popup-main-buy"
        >
          BUY
        </button>
      </div>
    </div>
  );
};

export default BuyBandwidth;
