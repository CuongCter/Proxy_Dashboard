import React from 'react'
import '../assets/scss/pages/_forgotPassword.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import LoginBanner from '../components/loginBanner/LoginBanner'
const ForgetPassword = () => {
  const navigate = useNavigate()
  const navigateSignUp = () =>{
    navigate('/register')
  }
  const navigateSignIn = () =>{
    navigate('/login')
  }
  return (
    <div className='forgot'>
      <div className="forgot__content">
        <div className="forgot__content-logo">logo</div>
        <div className="forgot__content-form">
          <h1 className='forgot__content-form-title'>FORGOT PASSWORD?</h1>
          <p className='forgot__content-form-describe'>Change your password now</p>
          <div>
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .required('Required')
                  .email('Must email'),
              })}
              onSubmit={(values) => { console.log(values); }}>
              <Form>
                <div className=''>
                  <label htmlFor="email">Email</label>
                  <Field
                    type="text"
                    id='email'
                    name="email"
                    placeholder='Enter your email'
                    className='forgot__input'
                  />
                  {/* <div className='error'>
                    <ErrorMessage name='email'></ErrorMessage>
                </div> */}
                </div>
                <div >
                  <button type='submit' className='sendCode' >SEND CODE</button>
                </div>
                <div className='choose-other'>
                  <div onClick={navigateSignUp}>Sign up</div>
                  <div onClick={navigateSignIn}>Sign in</div>  
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <div className="forgot__banner">
        <LoginBanner></LoginBanner>
      </div>
    </div>
  )
}

export default ForgetPassword