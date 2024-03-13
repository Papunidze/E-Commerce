import * as yup from "yup";

export const MyDetailsScheme = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain alphabets")
    .required("Name is required"),
});

export const PasswordScheme = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  newPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  newPasswordConfirm: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
