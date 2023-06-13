import React, { useEffect, useState } from 'react'
import '../../assets/scss/components/_plansBillings.scss'
import IconSelect from '../../assets/images/Select.png'
import IconSearch from '../../assets/images/Search.png'
import Plans from '../plans/Plans'
import Billings from '../billings/Billings'
const PlansBillings = (props) => {
  const [activeChoose, setActiveChoose] = useState("plans")
  return (
    <div className='planBilling'>
        <div className="planBilling__header">
            <div className='planBilling__header-choose'>
                <div className={`planBilling__header-choose-btn ${activeChoose === "plans" ? "activeChoose" : ""}`}
                  onClick={()=>setActiveChoose("plans")}
                >Plans</div>
                <div className={`planBilling__header-choose-btn ${activeChoose === "billings" ? "activeChoose" : ""}`}
                  onClick={()=>setActiveChoose("billings")}
                >Billings</div>
            </div>
            <div className="planBilling__header-filter">
                <h3 className='planBilling__header-filter-title'>Filter:</h3>
                <div className='planBilling__header-filter-none'>
                  <div>None</div>
                  <img src={IconSelect} alt="" />
                </div>
                <div className='planBilling__header-filter-asc'>
                  <div>Asc</div>
                  <img src={IconSelect} alt="" />
                </div>
                <div className='planBilling__header-filter-input'>
                  <img src={IconSearch} className='planBilling__header-filter-iconsearch' alt="" />
                  <input type="text" placeholder='Search' className='planBilling__header-filter-search' />
                </div>         
            </div>
        </div>
        <div className='planBilling__table'>
          
          {
            activeChoose === "plans" ? <Plans {...props}></Plans> : <Billings {...props}></Billings>
          }
        </div>
    </div>
  )
}

export default PlansBillings