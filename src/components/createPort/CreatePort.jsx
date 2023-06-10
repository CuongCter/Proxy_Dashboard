import React, { useState } from 'react'
import '../../assets/scss/components/_createPort.scss'
const CreatePort = ({ onClose }) => {
    const handlePopupClose = () => {
        onClose();
    };

    return (
        <div className='createPort'>
            <div className='createPort__popupCreate'>
                <div className='createPort__popupCreate-header'>
                    <h1 className='createPort__popupCreate-header-title'>CREATE PORT</h1>
                    <div className='createPort__popupCreate-header-close' onClick={handlePopupClose}>X</div>
                </div>
                <div className='createPort__popupCreate-create'>
                    <div className="createPort__popupCreate-create-port">
                        <div className='createPort-custom'><h3>Custom</h3></div>
                        <h1 className='createPort-title'>Port:</h1>
                        <input className='createPort-input' type="text" />
                    </div>
                    <div className="createPort__popupCreate-create-key">
                        <div className='key-custom'><h3>Random</h3></div>
                        <h1 className='key-title'>Key Port:</h1>
                        <input className='key-input' type="text" />
                    </div>
                    <div className="createPort__popupCreate-create-geo">
                        <h1 className='geo-title'> Geo:</h1>
                        <div className='geo-select'>
                            <select className='geo-select-country' type="text" name="" id="">
                                <option value="US">US</option>
                            </select>
                            <select className='geo-select-setup' name="" id="">
                                <option value="All">All (Default)</option>
                            </select>
                        </div>
                    </div>
                    <div className="createPort__popupCreate-create-rotate">
                            <h1 className='rotate-title'>Rotate:</h1>
                            <input className='rotate-input'  type="number" />
                      
                    </div>
                    <div className="createPort__popupCreate-create-services">
                        <h1 className='services-title'>Services:</h1>
                        <div className='services-option'>
                            <div className='services-option-create'>+Create</div>
                            <div className='services-option-accessgoogle'>AccessGoogle</div>
                            <div className='services-option-youtube'>Youtube</div>
                            <div className='services-option-googleplay'>Google Play</div>
                            <div className='services-option-gmail'>Gmail</div>
                            <div className='services-option-apple'>Apple</div>
                            <div className='services-option-appstore'>AppleStore</div>
                            <div className='services-option-instagram'>Instagram</div>
                            <div className='services-option-facebook'>Facebook</div>
                            <div className='services-option-outlook'>Outlook</div>
                        </div>
                    </div>

                </div>
                <div className="createPort__popupCreate-submit">
                    CREATE
                </div>
            </div>
        </div>
    )
}

export default CreatePort