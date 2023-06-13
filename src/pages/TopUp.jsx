import React, { useEffect, useState } from 'react'
import '../assets/scss/pages/_topUp.scss'
import Admin from '../components/Admin/Admin'
import MBBankIcon from '../assets/images/topUp/MBBank.png'
import right from '../assets/images/topUp/right.png'
import bitcoin from '../assets/images/topUp/bitcoin.png'
import USDT from '../assets/images/topUp/USDT.png'
import Card from '../assets/images/topUp/Card.png'
import QR from '../assets/images/topUp/QR.png'
import Copy from '../assets/images/Copy.png'
import VectorRight from '../assets/images/topUp/VectorRight.png'
const TopUp = () => {


  const [payMethod, setPayMethod] = useState("mbbank")

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
          <div className='payMethod'>
            <div className="payMethod__option">
              <div className={`payMethod__option-mbbank ${payMethod === "mbbank" ? "activePay" : ""}`} onClick={() => setPayMethod('mbbank')}>
                <div style={{ display: "flex" }}>
                  <img style={{ width: "45px", height: "20px", marginRight: "24px" }} className='payMethod__option-mbbank-icon' src={MBBankIcon} alt="" />
                  <h3 className='payMethod__option-mbbank-title'>Pay with MBBank</h3>
                </div>
                <img src={right} alt="" />
              </div>
              <div className={`payMethod__option-bitcoin ${payMethod === "bitcoin" ? "activePay" : ""}`} onClick={() => setPayMethod('bitcoin')}>
                <div style={{ display: "flex" }}>
                  <img style={{ width: "47.67px", height: "11px", marginRight: "19.33px" }} className='payMethod__option-bitcoin-icon' src={bitcoin} alt="" />
                  <h3 className='payMethod__option-bitcoin-title'>Pay with Bitcoin</h3>
                </div>
                <img src={right} alt="" />
              </div>
              <div className={`payMethod__option-USDT ${payMethod === "USDT" ? "activePay" : ""}`}  onClick={() => setPayMethod('USDT')}>
                <div style={{ display: "flex" }}>
                  <img style={{ width: "53.33px", height: "17px", marginRight: "12.67px" }} className='payMethod__option-USDT-icon' src={USDT} alt="" />
                  <h3 className='payMethod__option-USDT-title'>Pay with USDT</h3>
                </div>
                <img src={right} alt="" />
              </div>
              <div className={`payMethod__option-card ${payMethod === "card" ? "activePay" : ""}`}  onClick={() => setPayMethod('card')}>
                <div style={{ display: "flex" }}>
                  <img style={{ width: "34.38px", height: "35px", marginRight: "32.62px" }} className='payMethod__option-card-icon' src={Card} alt="" />
                  <h3 className='payMethod__option-card-title'>Pay with Visa/Master Card</h3>
                </div>
                <img src={right} alt="" />
              </div>
            </div>
            <div className='payMethod__content'>
              {
                payMethod === "mbbank" ? (
                  <div className='payMethod__content-mbbank'>
                    <div className='payMethod__content-mbbank-qr' >
                      <img src={QR} alt="" />
                    </div>
                    <div className='payMethod__content-mbbank-info'>
                      <ul>
                        <li>Bank: <span className='info-span'>MBBank</span> </li>
                        <li>Account number: <span className='info-span'>007001026666</span> </li>
                        <li>Account holder: <span className='info-span'>Nguyen Thi Thanh Thanh</span> </li>
                        <li>Amount: <span className='info-span'>4,692,000 VND</span> </li>
                        <li>Content: <span className='info-span'>H123456</span></li>
                      </ul>
                    </div>
                  </div>
                ) : (payMethod === "bitcoin" ?
                  <div className='payMethod__content-bitcoin'>
                    <p className='payMethod__content-bitcoin-title'>Send the amount to the address below:</p>
                    <ul>
                      <li style={{ marginBottom: "9px" }}>Wallet address: <span className='bitcoin-span'>16JVPYY1DHv4SSUYNDmVjkqg7P1uA7KWqu </span> <img className='bitcoin-copy' src={Copy} alt="" />  </li>
                      <li>Amount: <span className='bitcoin-span'> 0.04217 BTC</span><img className='bitcoin-copy' src={Copy} alt="" /> </li>
                    </ul>
                  </div> :
                  (
                    payMethod === "USDT" ?
                      <div className='payMethod__content-USDT'>
                        <p className='payMethod__content-USDT-title'>Send the amount to the address below:</p>
                        <ul>
                          <li style={{ marginBottom: "9px" }}>BEP-20 wallet <span className='USDT-span'>0xb06222c8a5587f5925b224dac424ec046a7d610 </span> <img className='USDT-copy' src={Copy} alt="" />  </li>
                          <li>Amount: <span className='USDT-span'> 204 USDT</span><img className='USDT-copy' src={Copy} alt="" /> </li>
                        </ul>
                      </div> :
                      <div className='payMethod__content-card'>
                        <p>Payment gateway by <span style={{ fontWeight: 700 }} > AppotaPay</span>. No virtual card support. </p>
                        <div>
                        <button className='payMethod__content-card-submit'>
                          <h4> Pay with Visa/Master Card</h4>
                          <img className='payMethod__content-card-submit-icon' src={VectorRight} alt="" /></button>
                        </div>
                       
                          
                      </div>
                  ))
              }

            </div>
          </div>
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