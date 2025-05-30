import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SIGN_UP_SCHEMA from "../../schemas/SignUpSchema";
import stylesSign from "./SignUp.module.scss";
import cx from "classnames";

const initialState = {
  firstName: "",
  lastName: "",
  nickName: "",
  email: "",
  password: "",
  confirmationPassword: "",
  role: "",
  isAgree: false,
};

function SignUp(props) {
  const submitHandler = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialState}
        onSubmit={submitHandler}
        validationSchema={SIGN_UP_SCHEMA}
        validateOnChange={true}
      >
        {(formikProps) => {
          return (
            <Form className={stylesSign.wrapper}>
              <h1 className={stylesSign.title}>CREATE AN ACCOUNT</h1>
              <p className={stylesSign.notice}>
                We always keep your name and email adress private
              </p>

              <div className={stylesSign.wrapperGroup}>
                <label className={stylesSign.wrapperInput}>
                  <Field
                    className={cx(stylesSign.input, {
                      [stylesSign.inValidInput]:
                        formikProps.touched.firstName &&
                        formikProps.errors.firstName,
                    })}
                    type="text"
                    name="firstName"
                    placeholder="Taras"
                  />
                  <ErrorMessage
                    className={stylesSign.error}
                    name="firstName"
                    component="p"
                  />
                </label>

                <label className={stylesSign.wrapperInput}>
                  <Field
                    className={cx(stylesSign.input, {
                      [stylesSign.inValidInput]:
                        formikProps.touched.lastName &&
                        formikProps.errors.lastName,
                    })}
                    type="text"
                    name="lastName"
                    placeholder="Shevchenko"
                  />
                  <ErrorMessage
                    className={stylesSign.error}
                    name="lastName"
                    component="p"
                  />
                </label>
              </div>

              <div className={stylesSign.wrapperGroup}>
                <label className={stylesSign.wrapperInput}>
                  <Field
                    className={cx(stylesSign.input, {
                      [stylesSign.inValidInput]:
                        formikProps.touched.nickName &&
                        formikProps.errors.nickName,
                    })}
                    type="text"
                    name="nickName"
                    placeholder="your nickname"
                  />
                  <ErrorMessage
                    className={stylesSign.error}
                    name="nickName"
                    component="p"
                  />
                </label>

                <label className={stylesSign.wrapperInput}>
                  <Field
                    className={cx(stylesSign.input, {
                      [stylesSign.inValidInput]:
                        formikProps.touched.email && formikProps.errors.email,
                    })}
                    type="text"
                    name="email"
                    placeholder="email@com"
                  />
                  <ErrorMessage
                    className={stylesSign.error}
                    name="email"
                    component="p"
                  />
                </label>
              </div>

              <div className={stylesSign.wrapperGroup}>
                <label className={stylesSign.wrapperInput}>
                  <Field
                    className={cx(stylesSign.input, {
                      [stylesSign.inValidInput]:
                        formikProps.touched.password &&
                        formikProps.errors.password,
                    })}
                    type="password"
                    name="password"
                    placeholder="your password"
                  />
                  <ErrorMessage
                    className={stylesSign.error}
                    name="password"
                    component="p"
                  />
                </label>

                <label className={stylesSign.wrapperInput}>
                  <Field
                    className={cx(stylesSign.input, {
                      [stylesSign.inValidInput]:
                        formikProps.touched.confirmationPassword &&
                        formikProps.errors.confirmationPassword,
                    })}
                    type="password"
                    name="confirmationPassword"
                    placeholder="confirm your password"
                  />
                  <ErrorMessage
                    className={stylesSign.error}
                    name="confirmationPassword"
                    component="p"
                  />
                </label>
              </div>

              <label className={stylesSign.radio}>
                <Field type="radio" name="role" value="buyer" checked />
                Join As a Buyer
                <p>
                  I am looking for a Name, Logo Tagline for business, brand or
                  product
                </p>
              </label>

              <label className={stylesSign.radio}>
                <Field type="radio" name="role" value="creative" />
                Join As a Creative
                <p>
                  I plan to submit name ideas, logo designs or sell names in
                  Domain Marketplace
                </p>
              </label>

              <label className={stylesSign.isAgree}>
                <Field type="checkbox" name="isAgree" />
                By clicking this checkbox, you agree to our{" "}
                <span>Terms of Service</span>
              </label>

              <button className={stylesSign.btnLogIn}>LOGIN</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default SignUp;
