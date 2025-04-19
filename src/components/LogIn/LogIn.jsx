import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LOG_IN_SCHEMA from "../../schemas/LogInSchema";
import styles from "./LogIn.module.scss";
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
    <Formik
      initialValues={initialState}
      onSubmit={submitHandler}
      validationSchema={LOG_IN_SCHEMA}
    >
      {(formikProps) => {
        return (
          <Form className={styles.wrapper}>
            <h1 className={styles.title}>LOGIN TO YOUR ACCOUNT</h1>

            <label className={styles.wrapperInput}>
              <Field
                className={cx(styles.input, {
                  [styles.inValidInput]:
                    formikProps.touched.email && formikProps.errors.email,
                })}
                type="text"
                name="email"
                placeholder="email@com"
              />
              <ErrorMessage
                className={styles.error}
                name="email"
                component="p"
              />
            </label>

            <label className={styles.wrapperInput}>
              <Field
                className={cx(styles.input, {
                  [styles.inValidInput]:
                    formikProps.touched.password && formikProps.errors.password,
                })}
                type="password"
                name="password"
                placeholder="your password"
              />
              <ErrorMessage
                className={styles.error}
                name="password"
                component="p"
              />
            </label>

            <button className={styles.btnLogIn}>LOGIN</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LogIn;
