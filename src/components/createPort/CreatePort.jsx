import React, { useEffect, useState } from "react";
import "../../assets/scss/components/_createPort.scss";
import { apiCreateProxy } from "../../services/api_helper";
import { showNotification } from "../notifications";
const CreatePort = ({ onClose, listCountry, addToListProxy }) => {
  const [country, setCountry] = useState(null);
  const [type, setType] = useState(0);
  const [rotate, setRotate] = useState(5);
  const [geo, setGeo] = useState({});

  const option = [
    { type: 0, name: "All (Default)" },
    { type: 1, name: "State" },
    { type: 2, name: "City" },
  ];

  const handlePopupClose = () => {
    onClose();
  };

  const createPort = async () => {
    try {
      if (rotate >= 5 && rotate <= 90) {
        const res = await apiCreateProxy(country, geo, rotate);
        if (res.success && res.data) {
          showNotification("success", "Create Port Success!");
          addToListProxy(res.data.result);
          handlePopupClose();
        } else {
          showNotification("danger", "Create Port", res.errors);
          console.log(res.errors);
        }
      } else {
        showNotification("warning", "Create Port", "5 <= Rotate <= 90");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const setOptionGeo = (option) => {
    try {
      setType(option);
      if (option == 1) {
        const state = country.state[0] ? country.state[0] : "";
        setGeo({ state });
      } else if (option == 2) {
        const city = country.city[0] ? country.city[0] : "";
        setGeo({ city });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (listCountry.length) {
      setCountry(listCountry[0]);
    }
  }, [listCountry]);

  return (
    <div className="createPort">
      <div className="createPort__popupCreate">
        <div className="createPort__popupCreate-header">
          <h1 className="createPort__popupCreate-header-title">CREATE PORT</h1>
          <div
            className="createPort__popupCreate-header-close"
            onClick={handlePopupClose}
          >
            X
          </div>
        </div>
        <div className="createPort__popupCreate-create">
          <div className="createPort__popupCreate-create-port">
            <div className="createPort-custom">
              <h3>Custom</h3>
            </div>
            <h1 className="createPort-title">Port:</h1>
            <input className="createPort-input" type="text" />
          </div>
          <div className="createPort__popupCreate-create-key">
            <div className="key-custom">
              <h3>Random</h3>
            </div>
            <h1 className="key-title">Key Port:</h1>
            <input className="key-input" type="text" />
          </div>
          <div className="createPort__popupCreate-create-geo">
            <h1 className="geo-title"> Geo:</h1>
            <div className="geo-select">
              <select
                onChange={(event) => {
                  const selectedCountry = listCountry.find(
                    (e) => e.id == event.target.value
                  );
                  setCountry(selectedCountry);
                  setType(0);
                  setGeo({});
                }}
                className="geo-select-country"
                type="text"
                name=""
                id=""
              >
                {listCountry.map((item) => {
                  return <option key={item.name} value={item.id}>{item.name}</option>;
                })}
              </select>
              <select
                onChange={(event) => setOptionGeo(event.target.value)}
                className="geo-select-setup"
                name=""
                id=""
              >
                {option.map((item) => {
                  return <option key={item.name} value={item.type}>{item.name}</option>;
                })}
              </select>
              {type == 1 ? (
                <select
                  onChange={(event) => setGeo({ state: event.target.value })}
                  className="geo-select-setup"
                  name=""
                  id=""
                >
                  {country.state.map((item) => {
                    return <option key={item} value={item}>{item}</option>;
                  })}
                </select>
              ) : null}
              {type == 2 ? (
                <select
                  onChange={(event) => setGeo({ city: event.target.value })}
                  className="geo-select-setup"
                  name=""
                  id=""
                >
                  {country.city.map((item) => {
                    return <option key={item} value={item}>{item}</option>;
                  })}
                </select>
              ) : null}
            </div>
          </div>
          <div className="createPort__popupCreate-create-rotate">
            <h1 className="rotate-title">Rotate:</h1>
            <input
              className="rotate-input"
              type="number"
              value={rotate}
              onChange={(event) => setRotate(event.target.value)}
            />
          </div>
          <div className="createPort__popupCreate-create-services">
            <h1 className="services-title">Services:</h1>
            <div className="services-option">
              <div className="services-option-create">+Create</div>
              <div className="services-option-accessgoogle">AccessGoogle</div>
              <div className="services-option-youtube">Youtube</div>
              <div className="services-option-googleplay">Google Play</div>
              <div className="services-option-gmail">Gmail</div>
              <div className="services-option-apple">Apple</div>
              <div className="services-option-appstore">AppleStore</div>
              <div className="services-option-instagram">Instagram</div>
              <div className="services-option-facebook">Facebook</div>
              <div className="services-option-outlook">Outlook</div>
            </div>
          </div>
        </div>
        <div
          className="createPort__popupCreate-submit"
          onClick={async () => {
            await createPort();
          }}
        >
          CREATE
        </div>
      </div>
    </div>
  );
};

export default CreatePort;
