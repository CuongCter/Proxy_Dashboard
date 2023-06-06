import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LayoutPage from './layout/LayoutPage'
import Dashboard from './pages/Dashboard'
import BuyBandwidth from './pages/BuyBandwidth'
import ProxyList from './pages/ProxyList'
import ToUp from './pages/ToUp'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'

function App() {


  return (
    <>
      <Routes>
        <Route element={<LayoutPage></LayoutPage>}>
          <Route path='/' element={<Dashboard></Dashboard>}/>
          <Route path='/by-bandwidth' element={<BuyBandwidth></BuyBandwidth>}/>
          <Route path='/proxy-list' element={<ProxyList></ProxyList>}/>
          <Route path='/to-up' element={<ToUp></ToUp>}/>
        </Route>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='forget-password' element={<ForgetPassword></ForgetPassword>}/>
      </Routes>
    </>
  )
}

export default App
