import React, { useEffect, useState } from "react";
import "../assets/scss/pages/_proxyList.scss";
import Admin from "../components/Admin/Admin";
import IconDelete from "../assets/images/Delete.png";
import IconSetting from "../assets/images/Settings.png";
import IconSearch from "../assets/images/Search.png";
import IconSelect from "../assets/images/Select.png";
import IconHidden from "../assets/images/-.png";
import IconCopy from "../assets/images/Copy.png";
import IconWIP from "../assets/images/WIP.png";
import CreatePort from "../components/createPort/CreatePort";
import {
  apiDeleteProxy,
  apiGetListCountry,
  apiGetListProxy,
} from "../services/api_helper";
import { formatBytes } from "../services/utils";
import { showNotification } from "../components/notifications";
import storageService from "../services/storage.service";
import { countrySession } from "../common/const.config";
const ProxyList = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [listProxy, setListProxy] = useState([]);
  const [listProxySearch, setListProxySearch] = useState([]);
  const [listCountry, setListCountry] = useState([]);
  const [listProxySelected, setListProxySelected] = useState([]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const getListProxy = async () => {
    try {
      const res = await apiGetListProxy();
      if (res.success && res.data) {
        setListProxySearch(res.data.result);
        setListProxy(res.data.result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addToListProxy = (proxy) => {
    try {
      const newListProxy = [...listProxy, proxy];
      setListProxySearch(newListProxy);
      setListProxy(newListProxy);
    } catch (err) {
      console.log(err);
    }
  };

  const getListCountry = async () => {
    try {
      const res = await apiGetListCountry();
      if (res.success && res.data) {
        storageService.setSessionObject(countrySession, res.data.result);
        setListCountry(res.data.result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const searchProxy = (key) => {
    try {
      if (key == "") setListProxySearch(listProxy);
      const newList = listProxy.filter((e) => {
        key = key.toLowerCase().trim();
        const country = e.country.toLowerCase().trim();
        const rotate = e.rotate.toString();
        const geo =
          e.state !== ""
            ? e.state.toLowerCase().trim()
            : e.city.toLowerCase().trim();
        return (
          country.includes(key) || geo.includes(key) || rotate.includes(key)
        );
      });
      setListProxySearch(newList);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProxy = async () => {
    try {
      let newList = [...listProxy];
      if (!listProxySelected.length) return;
      for (let i = 0; i < listProxySelected.length; i++) {
        const item = listProxySelected[i];
        const res = await apiDeleteProxy(item.id);
        if (res.success) {
          newList = newList.filter((e) => e.id !== item.id);
          setListProxy(newList);
          setListProxySearch(newList);
        }
      }
      setListProxySelected([]);
    } catch (err) {
      console.log(err);
    }
  };

  const exportProxy = () => {
    try {
      if (listProxySelected.length == 0) return;
      let fileData = "";
      listProxySelected.forEach((item) => {
        fileData += `${item.host}:${item.port}:${item.username}:${item.password}\n`;
      });
      const blob = new Blob([fileData], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "export.txt";
      link.href = url;
      link.click();
    } catch (err) {
      console.log(err);
    }
  };

  const select = (checked, item) => {
    try {
      let newList;
      if (checked) {
        newList = [...listProxySelected, item];
      } else {
        newList = listProxySelected.filter((e) => e.id !== item.id);
      }
      setListProxySelected(newList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      if (!listProxy.length) {
        getListProxy();
      }
      if (!listCountry.length) {
        if (storageService.getSessionObject(countrySession)) {
          setListCountry(storageService.getSessionObject(countrySession));
        } else {
          getListCountry();
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className={`list ${isPopupOpen ? "opacity" : ""}`}>
      {isPopupOpen && (
        <CreatePort
          addToListProxy={addToListProxy}
          listCountry={listCountry}
          onClose={closePopup}
        ></CreatePort>
      )}
      {/* <div className="list__admin">
        <Admin></Admin>
      </div> */}
      <div className="list__title">PROXY LIST</div>
      <div className="list__content">
        <div className="list__content-header">
          <div className="list__content-header-option">
            <div className="option-action" onClick={openPopup}>
              + Create Port
            </div>
            <div className="option-action">Change Country</div>
            {/* <div className="option-action">Change Port</div> */}
            <div onClick={exportProxy} className="option-action">
              Export
            </div>
            {/* <div className="option-action">Export WIP</div> */}
          </div>
          <div className="list__content-header-edit">
            {/* <div className="list__content-header-edit-setting">
              <img src={IconSetting} alt="" />
            </div> */}
            <div
              onClick={async () => {
                await deleteProxy();
              }}
              className="list__content-header-edit-delete"
            >
              <img src={IconDelete} alt="" />
            </div>
            <div className="list__content-header-edit-input">
              <img
                className="list__content-header-edit-icon"
                src={IconSearch}
                alt=""
              />
              <input
                onChange={(event) => searchProxy(event.target.value)}
                className="list__content-header-edit-search"
                placeholder="Search..."
              ></input>
            </div>
          </div>
        </div>
        <div className="list__content-table">
          <table class="list__table">
            <thead className="list__table-header">
              <tr>
                <th>
                  <img className="iconSelect" src={IconHidden} alt="" />
                </th>
                <th>
                  Key Port{" "}
                  <img className="iconSelect" src={IconSelect} alt="" />
                </th>
                <th>Username</th>
                <th>Port</th>
                <th>
                  Country
                  <img className="iconSelect" src={IconSelect} alt="" />
                </th>
                <th>
                  Region
                  <img className="iconSelect" src={IconSelect} alt="" />
                </th>
                <th>
                  Rotate
                  <img className="iconSelect" src={IconSelect} alt="" />
                </th>
                <th>
                  Bandwidth
                  <img className="iconSelect" src={IconSelect} alt="" />
                </th>
                <th>Status</th>
                <th>Action</th>
                {/* <th>Services</th> */}
              </tr>
            </thead>
            <tbody className="list__table-body">
              {listProxySearch.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <input
                        onChange={(event) => select(event.target.checked, item)}
                        type="checkbox"
                      />
                    </td>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.port}</td>
                    <td>{item.country}</td>
                    <td>
                      {item.state !== ""
                        ? `State: ${item.state}`
                        : `City: ${item.city}`}
                    </td>
                    <td>{item.rotate} minutes</td>
                    <td>{formatBytes(item.bandwidth)}</td>
                    <td align="center">
                      <div className="list__table-body-status">
                        {item.isActive ? "On" : "Off"}
                      </div>
                    </td>
                    <td align="center" className="list__action">
                      <div
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `${item.host}:${item.port}:${item.username}:${item.password}`
                          );
                          showNotification("info", "Copied Proxy");
                        }}
                        className="list__table-body-action"
                      >
                        <img src={IconCopy} alt="" />
                      </div>
                      <div className="list__table-body-action">
                        <img src={IconWIP} alt="" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProxyList;
