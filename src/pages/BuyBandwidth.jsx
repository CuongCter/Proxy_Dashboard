import React from 'react'
import '../assets/scss/pages/_buyBandwidth.scss'
const BuyBandwidth = () => {
  return (
    <div className='bandwidth'>
      <div className='bandwidth__popup'>
        <div className='bandwidth__popup-header'>
          <h1 className='bandwidth__popup-header-title'>BUY BANDWIDTH</h1>
          <div className='bandwidth__popup-header-close'>x</div>
        </div>
        <div className="bandwidth__popup-main">
          <div className="bandwidth__popup-main-amount">
            <h3 className='bandwidth__popup-main-amount-title'>Bandwidth</h3>
            <input className='bandwidth__popup-main-amount-input' placeholder='Enter here' type='text'>
            </input>
          </div>
          <div className="bandwidth__popup-main-type">
            <div className="bandwidth__popup-main-type-title">Type</div>
            <div className='bandwidth__popup-main-type-option'>
              <p className='bandwidth__popup-main-type-option-note'>Amount: 0$, Price 3/GB</p>
              <div style={{ display: 'flex', marginBottom: '10px' }}>
                <input type="radio" name="bandwidth" />
                <label className='label_bandwidth' for="bandwidth">Buy new bandwidth</label>
              </div>
              <div style={{ display: 'flex' }}>
                <input type="radio" name="bandwidth" />
                <label className='label_bandwidth' for="bandwidth">Add more bandwidth</label>
              </div>
            </div>
          </div>
          <div className="bandwidth__popup-main-period">
            <h3 className='bandwidth__popup-main-period-title'>Period:</h3>
            <select className='bandwidth__popup-main-period-select' type='text'>
              <option className='select-option' value="1" selected>1 month</option>
              <option className='select-option' value="2" >2 months</option>
              <option className='select-option' value="3">3 months</option>
            </select>
          </div>
        </div>
        <button className='bandwidth__popup-main-buy'>
          BUY
        </button>
      </div>
    </div>
  )
}

export default BuyBandwidth