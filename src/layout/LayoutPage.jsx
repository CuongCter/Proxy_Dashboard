import React, { Fragment } from 'react'
import NavBar from '../modules/NavBar'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
  return (
    <Fragment>
        <NavBar></NavBar>
        <Outlet></Outlet>
    </Fragment>
  )
}

export default LayoutPage