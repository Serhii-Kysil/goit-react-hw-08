import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required("Username is required")
    .min(3, "Minimum 8 symbols")
    .max(50, "Maximum 50 characters"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Minimum 8 symbols")
    .max(50, "Maximum 50 characters"),
});

export const RegisterForm = () => {
  const userNameField = useId();
  const emailField = useId();
  const passwordField = useId();

  const dispatch = useDispatch();

  const handleRegister = (newUser) => {
    dispatch(register(newUser))
      .unwrap()
      .then(() => {
        toast.success("Account successfuly created");
      })
      .catch(() => {
        toast.error("Registration error");
      });
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        const newUser = {
          name: values.name,
          email: values.email,
          password: values.password,
        };
        handleRegister(newUser);
        actions.resetForm();
      }}
    >
      <Form className={css.form} autoComplete="on">
        <div className={css.formGroup}>
          <label htmlFor={userNameField} className={css.label}>
            Username
          </label>
          <Field
            className={css.formFiled}
            type="text"
            name="name"
            id={userNameField}
          />

          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formGroup}>
          <label htmlFor={emailField} className={css.label}>
            Email
          </label>
          <Field
            className={css.formFiled}
            type="email"
            name="email"
            id={emailField}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formGroup}>
          <label className={css.label} htmlFor={passwordField}>
            Password
          </label>
          <Field
            className={css.formFiled}
            type="password"
            name="password"
            id={passwordField}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <div className={css.btnGroup}>
          <button className={css.btn} type="submit">
            Register
          </button>
        </div>
      </Form>
    </Formik>
  );
};
