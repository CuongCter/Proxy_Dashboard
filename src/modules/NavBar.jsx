import React, { useState } from 'react'
import './NavBar.scss'
import Dashboard from '../pages/Dashboard'
import Pricing from '../pages/Pricing'
import TopUp from '../pages/TopUp'
import BuyBandwidth from '../pages/BuyBandwidth'
import ProxyList from '../pages/ProxyList'
import InfoAPI from '../pages/InfoAPI'
import Guide from '../pages/Guide'
import TermOfService from '../pages/TermOfService'
import IconDashboard from '../assets/icons/incons-sidebar/Dashboard.png'
import IconPricing from '../assets/icons/incons-sidebar/Pricing.png'
import IconTopUp from '../assets/icons/incons-sidebar/TopUp.png'
import IconBuyBandwidth from '../assets/icons/incons-sidebar/Billing.png'
import IconProxyList from '../assets/icons/incons-sidebar/ProxyList.png'
import IconInfoAPI from '../assets/icons/incons-sidebar/Info.png'
import IconGuide from '../assets/icons/incons-sidebar/Guide.png'
import IconTerm from '../assets/icons/incons-sidebar/Term.png'
import IconLogout from '../assets/icons/icons-logout/Logout.png'
import { useNavigate, useParams } from 'react-router-dom'
import Admin from '../components/Admin/Admin'
const NavBar = () => {

const arrSideBar = [
  {
    id: 1,
    name: 'Dashboard', 
    icon: IconDashboard,
    component: <Dashboard/>,
    path: '/'
  },
  {
    id: 2,
    name: 'Pricing',
    icon: IconPricing,
    component: <Pricing/>,
    path: '/pricing'
  },
  {
    id: 3,
    name: 'Top up',
    icon: IconTopUp,
    component: <TopUp/>,
    path: '/top-up'
  },
  {
    id: 4,
    name: 'Buy Bandwidth',
    icon: IconBuyBandwidth,
    component: <BuyBandwidth/>,
    path: '/buy-bandwidth'
  },
  {
    id: 5,
    name: 'Proxy List',
    icon: IconProxyList,
    component: <ProxyList/>,
    path: '/proxy-list'
  },
  {
    id: 6,
    name: 'Info & API',
    icon: IconInfoAPI,
    component: <InfoAPI/>,
    path: '/info-api'
  },
  {
    id: 7,
    name: 'Guide',
    icon: IconGuide,
    component: <Guide/>,
    path: '/guide'
  },
  {
    id: 8,
    name: 'Term of service',
    icon: IconTerm,
    component: <TermOfService/>,
    path: '/term'
  },
]
const params = useParams()
const [selectMenu, setSelectMenu] = useState(arrSideBar[0])
const navigate = useNavigate()
const onSelectTab = (tabValue) =>{
  const tab = arrSideBar.find((tab) => tab.id === tabValue.id)
  tab && setSelectMenu(tab)
   navigate(tabValue.path)
   console.log(tabValue.id);
}

  return (
    <>
    
    <div className='layoutDetail'>
      <div className='layoutDetail__main'>
        <div className="layoutDetail__main-sidebar">
          <div className="logoProxy">
            PROXY LOGO
          </div>
          {
            arrSideBar.map((itemMenu,index) =>(
              
              <div 
                key={index} 
                className={`menu-sidebar ${selectMenu.id === index + 1 ? 'active' : ''}`}
                onClick={()=>onSelectTab(itemMenu)}
              >
                  <div className='menu-sidebar-icon'>
                    <img src={itemMenu.icon} alt="" />
                  </div>
                  <div className='menu-sidebar-name'>{itemMenu.name}</div>
              </div>
            ))
          }
        </div>
        <div className='layoutDetail__main-logout'>
            <img className='logout-icon' src={IconLogout} alt="" />
            <div className='logout-content'>Logout</div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default NavBar