import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email address").required("Required"),
  query: yup.string().required("You must select an option!"),
  message: yup.string().required("Required"),
});
