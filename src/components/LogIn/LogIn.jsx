import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LOG_IN_SCHEMA from "../../schemas/LogInSchema";
import styles from './LogIn.module.scss'

const initialState = {
  email: "",
  password: "",
};

function LogIn(props) {
  const submitHandler = (values, actions) => {
    console.log(values);
    actions.resetFormik();
  };

  return (
    <Formik className={styles.wrapper}
    initialValues={initialState} 
    onSubmit={submitHandler}
    validationSchema={LOG_IN_SCHEMA}>

      {(formikProps) => {
        return (
          <Form className={styles.wrapper}>
            <h2>LOGIN TO YOUR  ACCOUNT</h2>

            <Field type="text" name="email" placeholder="email@com" />
            <ErrorMessage name="email" component="p" />

            <Field type="text" name="password" placeholder="your password" />
            <ErrorMessage name="password" component="p" />

            <button>LOGIN</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LogIn;
