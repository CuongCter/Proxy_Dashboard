import React from 'react'
import '../../assets/scss/components/_admin.scss'
import avtAdmin from '../../assets/images/Frame.png'
const Admin = () => {
  return (
    <div className='admin'>
        <div className='admin__status'></div>
        <img className='admin__logo' src={avtAdmin} alt="admin" />
    </div>
  )
}

export default Admin