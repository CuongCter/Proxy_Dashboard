import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LayoutPage from './layout/LayoutPage'
import Dashboard from './pages/Dashboard'
import BuyBandwidth from './pages/BuyBandwidth'
import ProxyList from './pages/ProxyList'
import TopUp from './pages/TopUp'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import Pricing from './pages/Pricing'
import InfoAPI from './pages/InfoAPI'
import Guide from './pages/Guide'
import TermOfService from './pages/TermOfService'

function App() {


  return (
    <>
      <Routes>
        <Route element={<LayoutPage></LayoutPage>}>
          <Route path='/' element={<Dashboard></Dashboard>}/>
          <Route path='/buy-bandwidth' element={<BuyBandwidth></BuyBandwidth>}/>
          <Route path='/proxy-list' element={<ProxyList></ProxyList>}/>
          <Route path='/top-up' element={<TopUp></TopUp>}/>
          <Route path='/pricing' element={<Pricing></Pricing>}/>
          <Route path='/info-api' element={<InfoAPI></InfoAPI>}/>
          <Route path='/guide' element={<Guide></Guide>}/>
          <Route path='term' element={<TermOfService></TermOfService>}/>
        </Route>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='forget-password' element={<ForgetPassword></ForgetPassword>}/>
      </Routes>
    </>
  )
}

export default App
