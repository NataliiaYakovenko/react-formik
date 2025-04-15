import * as yup from "yup";

const LOG_IN_SCHEMA = yup.object({
  email: yup.string().required().email("Your email is invalid"),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Password is invalid"
    ),
});

export default LOG_IN_SCHEMA;
