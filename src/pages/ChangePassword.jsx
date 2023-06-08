import React from 'react'
import '../assets/scss/pages/_changePassword.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import IconEye from '../assets/icons/icons-form/IconEye';
import IconEyeSlash from '../assets/icons/icons-form/IconEyeSlash';
import LoginBanner from '../components/loginBanner/LoginBanner'
const ChangePassword = () => {
  const navigate = useNavigate()
  const navigateSignUp = () =>{
    navigate('/register')
  }
  const navigateSignIn = () =>{
    navigate('/login')
  }
  return (
    <div className='changePass'>
      <div className="changePass__content">
        <div className="changePass__content-logo">logo</div>
        <div className="changePass__content-form">
          <h1 className='changePass__content-form-title'>FORGOT PASSWORD?</h1>
          <p className='changePass__content-form-describe'>Change your password now</p>
          <div>
            <Formik
              initialValues={{
                code: "",
                password: "",
                confirm: "",
                // remember: false
              }}
              validationSchema={Yup.object({
                code: Yup.string()
                  .required('Required'),

                password: Yup.string()
                  .required('Required'),
                confirm: Yup.string()
                  .required('Required'),
              })}
              onSubmit={(values) => { console.log(values); }}>
              <Form>
                <div className=''>
                  <label htmlFor="text">Code</label>
                  <Field
                    type="text"
                    id='code'
                    name="code"
                    placeholder='Enter the code sent to your email'
                    className='change__input'
                  />
                  {/* <div className='error'>
                    <ErrorMessage name='email'></ErrorMessage>
                </div> */}
                </div>
                <div className='input-password'>
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    id='password'
                    name="password"
                    placeholder='Enter new password'
                    className='change__input '
                  />

                </div>
                <div className='input-confirm'>
                  <label htmlFor="confirm">Confirm password</label>
                  <Field
                    type="password"
                    id='confirm'
                    name="confirm"
                    placeholder='Enter new password'
                    className='change__input '
                  />
                </div>
                <div >
                  <button type='submit' className='changeButton'>CHANGE PASSWORD</button>
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
      <div className="register__banner">
        <LoginBanner></LoginBanner>
      </div>
     
    </div>
  )
}

export default ChangePassword