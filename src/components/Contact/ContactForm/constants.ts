import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Required"),
  email: yup
    .string()
    .required("Required")
    .matches(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|ru|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/,
      "Invalid email address",
    )
    .email("Invalid email address"),

  query: yup.string().required("You must select an option!"),
  message: yup.string().required("Required"),
});
