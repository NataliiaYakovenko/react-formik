import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LOG_IN_SCHEMA from "../../schemas/LogInSchema";
import stylesLog from "./LogIn.module.scss";
import cx from "classnames";

const initialState = {
  email: "",
  password: "",
};

function LogIn(props) {
  const submitHandler = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialState}
        onSubmit={submitHandler}
        validationSchema={LOG_IN_SCHEMA}
      >
        {(formikProps) => {
          return (
            <Form className={stylesLog.wrapper}>
              <h1 className={stylesLog.title}>LOGIN TO YOUR ACCOUNT</h1>

              <label className={stylesLog.wrapperInput}>
                <Field
                  className={cx(stylesLog.input, {
                    [stylesLog.inValidInput]:
                      formikProps.touched.email && formikProps.errors.email,
                  })}
                  type="text"
                  name="email"
                  placeholder="email@com"
                />
                <ErrorMessage
                  className={stylesLog.error}
                  name="email"
                  component="p"
                />
              </label>

              <label className={stylesLog.wrapperInput}>
                <Field
                  className={cx(stylesLog.input, {
                    [stylesLog.inValidInput]:
                      formikProps.touched.password &&
                      formikProps.errors.password,
                  })}
                  type="password"
                  name="password"
                  placeholder="your password"
                />
                <ErrorMessage
                  className={stylesLog.error}
                  name="password"
                  component="p"
                />
              </label>

              <button className={stylesLog.btnLogIn}>LOGIN</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default LogIn;
