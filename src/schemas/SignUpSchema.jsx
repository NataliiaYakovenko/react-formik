import * as yup from "yup";

const SIGN_UP_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .required()
    .min(2, "min 2 symbols")
    .max(30, "max 30 symbols")
    .matches(/^[A-Z]/, "first letter must be capital"),

  lastName: yup
    .string()
    .trim()
    .required()
    .min(2, "min 2 symbols")
    .max(30, "max 30 symbols")
    .matches(/^[A-Z]/, "first letter must be capital"),

  nickName: yup
    .string()
    .trim()
    .required()
    .min(2, "min 2 symbols")
    .max(30, "max 30 symbols")
    .matches(/^[A-Z]/, "first letter must be capital"),

  email: yup.string().required().email("your email is invalid"),

  password: yup
    .string()
    .required()
    .min(6, "min 6 symbols")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "password is invalid"
    ),

  confirmationPassword: yup
    .string()
    .required()
    .min(6, "min 6 symbols")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "password is invalid"
    ),
});

export default SIGN_UP_SCHEMA;
