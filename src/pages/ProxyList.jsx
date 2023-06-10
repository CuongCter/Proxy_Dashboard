import React, { useState } from 'react'
import '../assets/scss/pages/_proxyList.scss'
import Admin from '../components/Admin/Admin'
import IconDelete from '../assets/images/Delete.png'
import IconSetting from '../assets/images/Settings.png'
import IconSearch from '../assets/images/Search.png'
import IconSelect from '../assets/images/Select.png'
import IconHidden from '../assets/images/-.png'
import IconCopy from '../assets/images/Copy.png'
import IconWIP from '../assets/images/WIP.png'
import CreatePort from '../components/createPort/CreatePort'
const ProxyList = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className={`list ${isPopupOpen ? "opacity" : ""}`}>
      {isPopupOpen && <CreatePort onClose={closePopup}></CreatePort > }
      <div className='list__admin'>
        <Admin></Admin>
      </div>
      <div className='list__title'>
        PROXY LIST
      </div>
      <div className='list__content'>
        <div className='list__content-header'>
          <div className="list__content-header-option">
            <div className='option-action' onClick={openPopup}>+ Create Port
            </div>
            <div className='option-action'>Change IP</div>
            <div className='option-action'>Change Port</div>
            <div className='option-action'>Export</div>
            <div className='option-action'>Export WIP</div>
          </div>
          <div className="list__content-header-edit">
            <div className="list__content-header-edit-setting">
              <img src={IconSetting} alt="" />
            </div>
            <div className="list__content-header-edit-delete">
              <img src={IconDelete} alt="" />
            </div>
            <div className="list__content-header-edit-input" >
              <img className='list__content-header-edit-icon' src={IconSearch} alt="" />
              <input className="list__content-header-edit-search" placeholder='Search...'></input>
            </div>
          </div>
        </div>
        <div className="list__content-table">
          <table class="list__table">
            <thead className='list__table-header'>
              <tr >
                <th><img className='iconSelect' src={IconHidden} alt="" /></th>
                <th>Port  <img className='iconSelect' src={IconSelect} alt="" /></th>
                <th>WIP Port  <img className='iconSelect' src={IconSelect} alt="" /></th>
                <th>Key Port  <img className='iconSelect' src={IconSelect} alt="" /></th>
                <th>Country  <img className='iconSelect' src={IconSelect} alt="" /></th>
                <th>Region  <img className='iconSelect' src={IconSelect} alt="" /></th>
                <th>Rotate  <img className='iconSelect' src={IconSelect} alt="" /></th>
                <th>Bandwidth  <img className='iconSelect' src={IconSelect} alt="" /></th>
                <th>Status</th>
                <th>Action</th>
                <th>Services</th>
              </tr>
            </thead>
            <tbody className='list__table-body'>
              <tr>
                <td><input type="checkbox" /></td>
                <td>10001</td>
                <td>Not used</td>
                <td>lhykei74#VGwCM=^</td>
                <td>US</td>
                <td>State: OR</td>
                <td>5 minutes</td>
                <td>13.42 KB</td>
                <td align='center'>
                  <div className='list__table-body-status'>On</div>
                </td>
                <td align='center' className='list__action' >

                  <div className='list__table-body-action'>
                    <img src={IconCopy} alt="" />
                  </div>
                  <div className='list__table-body-action'>
                    <img src={IconWIP} alt="" />
                  </div>

                </td>
                <td align='center'>
                  <div className='list__table-body-services'>AccessG</div>
                  <div className='list__table-body-services'>Youtube</div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  )
}

export default ProxyList