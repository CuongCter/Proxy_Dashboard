import React from 'react'
import '../assets/scss/pages/_topUp.scss'
import Admin from '../components/Admin/Admin'
const TopUp = () => {
  return (
    <div className='topup'>
      <div className="topup__admin">
        <Admin></Admin>
      </div>
      <div className="topup__title">
        <h1 className="topup__title-name">TOP UP</h1>
        <p className="topup__title-note">Please follow every steps below</p>
      </div>
      <div className='topup__step'>
        <div className='topup__step-one'>
          <label className='topup__step-one-label' htmlFor="step_one">STEP 1 - ENTER THE AMOUNT</label>
          <input placeholder='Enter the amount here' className='topup__step-one-input' type="text" id='step_one' />
        </div>
        <div className='topup__step-two'>
          <label className='topup__step-two-label' htmlFor="step_two">STEP 2 - DISCOUNT CODE (IF ANY)</label>
          <p className='topup__step-two-note'>Skip to the next step if you don’t have any discount code</p>
          <input placeholder='Enter the code here' className='topup__step-two-input' type="text" id='step_two' />
        </div>
        <div className="topup__step-three">
          <label className='topup__step-three-label' >STEP 3 - CHOOSE PAYMENT METHOD</label>

        </div>
        <div className="topup__step-four">
          <label className='topup__step-four-label' >STEP 4 - ACTIVATE</label>
          <p className='topup__step-four-note'>After successful payment, click “Activate my wallet” to finish the top-up process</p>
        </div>
      </div>
      <div className='topup__submit'>
        <button className='topup__submit-button'>
          Activate my wallet</button>
      </div>
    </div>
  )
}

export default TopUp