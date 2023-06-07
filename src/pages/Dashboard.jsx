import React from 'react'
import '../assets/scss/pages/_dashboard.scss'
import Admin from '../components/Admin/Admin'
import IconPort from '../assets/images/overview/Port.png'
import IconBandWidth from '../assets/images/overview/Bandwidth.png'
import IconDollar from '../assets/images/overview/$.png'
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard__admin'>
        <Admin></Admin>
      </div>
      <div className="dashboard__overview">
        <h1 className='dashboard__overview-title'>OVERVIEW</h1>
      </div>
      <div className='dashboard__overview-main'>
        <div className='dashboard__overview-main-port box'>
          <div className='port__icon'>
            <img src={IconPort} alt="" />
          </div>
          <div className='port__content'>
            <div className='port__content-active'>
              <div className='port__content-active-title'>Active Port:</div>
              <div className='port__content-active-total'>02</div>
            </div>
            <div className='port__content-unused'>
              <div className='port__content-unused-title'>Unused Port:</div>
              <div className='port__content-unused-total'>0</div>
            </div>
          </div>
        </div>
        <div className='dashboard__overview-main-bandwidth box'>
          <div className='bandwidth__icon'>
            <img src={IconBandWidth} alt="" />
          </div>
          <div className='bandwidth__content'>
            <h1 className='bandwidth__content-title'>Available Bandwidth:</h1>
            <h1 className='bandwidth__content-total'>999.99 MB</h1>
            <p className='bandwidth__content-more'>+ Buy Bandwidth</p>
          </div>
        </div>
        <div className='dashboard__overview-main-balance box'>
          <div className='balance__icon'>
            <img src={IconDollar} alt="" />
          </div>
          <div className="balance__content">
            <div className="balance__content-total">
              <div className='balance__content-total-title'>Balance</div>
              <div className='balance__content-total-sum'>$20.39</div>
            </div>
            <button className='balance__content-topup'>
              + Top-up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard