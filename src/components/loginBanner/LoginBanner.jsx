import React from 'react'
import '../../assets/scss/components/_loginBanner.scss'
import imgDashboard from '../../assets/images/Dashboard1.png'
const LoginBanner = () => {
  return (
    <div className='loginBanner'>
        <div className='loginBanner__title'>The Best Residential Proxy</div>
        <div className='loginBanner__describe'>Allowlisted IPs from real ISPs. Best price on the market.</div>
        <div className='loginBanner__img'>
            <img src={imgDashboard} alt="" />
        </div>
    </div>
  )
}

export default LoginBanner