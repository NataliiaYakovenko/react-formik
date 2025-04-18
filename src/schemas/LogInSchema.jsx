import * as yup from "yup";

const LOG_IN_SCHEMA = yup.object({
  email: yup.string().required().email("your email is invalid"),
  password: yup
    .string()
    .required()
    .min(6,'min 6 symbols')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "password is invalid"
    ),
});

export default LOG_IN_SCHEMA;
