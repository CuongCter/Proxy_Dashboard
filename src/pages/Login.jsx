import React, { useState } from "react";
import "../assets/scss/pages/_login.scss";
import storageService from "../services/storage.service";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import IconEye from "../assets/icons/icons-form/IconEye";
import IconEyeSlash from "../assets/icons/icons-form/IconEyeSlash";
import LoginBanner from "../components/loginBanner/LoginBanner";
import { apiLogin } from "../services/api_helper";
import { accessToken } from "../common/const.config";
import { showNotification } from "../components/notifications";
const Login = () => {
  const navigate = useNavigate();
  const navigateSignUp = () => {
    navigate("/register");
  };
  const navigateForgotPassword = () => {
    navigate("/forget-password");
  };

  const navigateHome = () => {
    navigate("/");
  };

  const [showPass, setShowPass] = useState(false);
  const showPassword = () => {
    setShowPass(true);
  };
  const hiddenPassword = () => {
    setShowPass(false);
  };

  const _login = async (email, password) => {
    try {
      if (password.length >= 6 && password.length <= 32) {
        const res = await apiLogin(email, password);

        if (res.success && res.data.result) {
          const { result } = res.data;
          storageService.set(accessToken, result.token);
          navigateHome();
        } else {
          showNotification("danger", "Login", res.errors);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__content-logo">logo</div>
        <div className="login__content-form">
          <h1 className="login__content-form-title">WELCOME BACK!</h1>
          <p className="login__content-form-describe">
            Enter your account detail to login
          </p>
          <div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string().required("Required").email("Must email"),

                password: Yup.string().required("Required"),
              })}
              onSubmit={async (values) => {
                const { email, password } = values;
                await _login(email, password);
              }}
            >
              <Form>
                <div className="">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="login__input"
                  />
                  {/* <div className='error'>
                    <ErrorMessage name='email'></ErrorMessage>
                </div> */}
                </div>
                <div className="input-password">
                  <label htmlFor="password">Password</label>
                  <Field
                    type={showPass ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="login__input "
                  />
                  {showPass ? (
                    <IconEye
                      className="icon-eye"
                      onClick={hiddenPassword}
                    ></IconEye>
                  ) : (
                    <IconEyeSlash
                      className="icon-eye"
                      onClick={showPassword}
                    ></IconEyeSlash>
                  )}
                  {/* <div className='error'>
                    <ErrorMessage name='password'></ErrorMessage>
                </div> */}
                </div>
                <div className="form__other">
                  <div className="form__other-checkbox">
                    <input
                      defaultChecked={true}
                      type="checkbox"
                      id="remember"
                      name="remember"
                    />
                    Remember me
                  </div>
                  <div
                    className="form__other-forgot"
                    onClick={navigateForgotPassword}
                  >
                    Forgot password
                  </div>
                </div>
                <div>
                  <button type="submit" className="signIn">
                    Sign In
                  </button>
                </div>
                <div>
                  <span>Don’t have an account?</span>

                  <span className="notAccount" onClick={navigateSignUp}>
                    Sign up
                  </span>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <div className="login__banner">
        <LoginBanner></LoginBanner>
      </div>
    </div>
  );
};

export default Login;
