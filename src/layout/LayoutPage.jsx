import React, { Fragment } from 'react'
import NavBar from '../modules/NavBar'
import { Outlet } from 'react-router-dom'
import './LayoutPage.scss'
const LayoutPage = () => {
  return (
    <div className='container'>
        <NavBar></NavBar>
        <Outlet></Outlet>
    </div>
  )
}

export default LayoutPage