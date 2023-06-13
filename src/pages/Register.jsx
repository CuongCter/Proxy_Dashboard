import React, { useState } from "react";
import "../assets/scss/pages/_register.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import IconEye from "../assets/icons/icons-form/IconEye";
import IconEyeSlash from "../assets/icons/icons-form/IconEyeSlash";
import LoginBanner from "../components/loginBanner/LoginBanner";
import { apiCreateUser } from "../services/api_helper";
import { showNotification } from "../components/notifications";
const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirm] = useState(false);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirm, setConfirm] = useState("");
  // const [name, setName] = useState("");

  const showPassword = () => {
    setShowPass(true);
  };
  const hiddenPassword = () => {
    setShowPass(false);
  };
  const showConfirm = () => {
    setShowConfirm(true);
  };
  const hiddenConfirm = () => {
    setShowConfirm(false);
  };

  const register = async (email, password, confirm, name) => {
    try {
      if (
        password === confirm &&
        name.length > 1 &&
        password.length >= 6 &&
        password.length <= 32
      ) {
        const res = await apiCreateUser(email, password, name);
        if (res.success) {
          showNotification("success", "Register", "Dang ky thanh cong");
          navigateSignIn();
          console.log("Dang ky thanh cong");
        } else {
          if (res.errors.includes("E11000")) {
            showNotification(
              "warning",
              "Register",
              "Tai khoan da duoc dang ky"
            );
          } else {
            console.log(res.errors);
          }
        }
      } else if (password.length < 6 || password.length > 32) {
        showNotification("warning", "Register", "6 <= Password <= 32");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();
  const navigateSignIn = () => {
    navigate("/login");
  };
  return (
    <div className="register">
      <div className="register__content">
        <div className="register__content-logo">logo</div>
        <div className="register__content-form">
          <h1 className="register__content-form-title">
            WELCOME TO ZEUS PROXY!
          </h1>
          <p className="register__content-form-describe">
            Create a new account
          </p>
          <div>
            <Formik
              initialValues={{
                email: "",
                password: "",
                confirm: "",
                name: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string().required("Required").email("Must email"),
                password: Yup.string().required("Required"),
                confirm: Yup.string().required("Required"),
                name: Yup.string().required("Required"),
              })}
              onSubmit={async (values) => {
                const { email, password, confirm, name } = values;
                await register(email, password, confirm, name);
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
                    className="register__input"
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
                    className="register__input "
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

                  {/* <div className="error">
                    <ErrorMessage name="password"></ErrorMessage>
                  </div> */}
                </div>
                <div className="input-confirm">
                  <label htmlFor="confirm">Confirm password</label>
                  <Field
                    type={showConfirmPass ? "text" : "password"}
                    id="confirm"
                    name="confirm"
                    placeholder="Enter your password"
                    className="register__input "
                  />
                  {showConfirmPass ? (
                    <IconEye
                      className="icon-eye-confirm"
                      onClick={hiddenConfirm}
                    ></IconEye>
                  ) : (
                    <IconEyeSlash
                      className="icon-eye-confirm"
                      onClick={showConfirm}
                    ></IconEyeSlash>
                  )}

                  {/* <div className="error">
                    <ErrorMessage name="password"></ErrorMessage>
                  </div> */}
                </div>
                <div className="">
                  <label htmlFor="email">Name</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="register__input"
                  />
                  {/* <div className='error'>
                    <ErrorMessage name='email'></ErrorMessage>
                </div> */}
                </div>
                <div>
                  <button type="submit" className="signUp">
                    CREATE AN ACCOUNT
                  </button>
                </div>
                <div>
                  <span>Already have an account?</span>

                  <span className="haveAccount" onClick={navigateSignIn}>
                    Sign In
                  </span>
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
  );
};

export default Register;
