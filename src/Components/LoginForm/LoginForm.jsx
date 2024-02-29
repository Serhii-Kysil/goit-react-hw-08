import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import * as Yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import toast from "react-hot-toast";

const userSchema = Yup.object().shape({
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

export const LoginForm = () => {
  const emailField = useId();
  const passwordField = useId();

  const dispatch = useDispatch();

  const handleLogin = (userData) => {
    dispatch(logIn(userData))
      .unwrap()
      .then(() => {
        toast.success("Login Success");
      })
      .catch(() => {
        toast.error("Invalid password or email");
      });
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        const userData = {
          email: values.email,
          password: values.password,
        };
        handleLogin(userData);
        actions.resetForm();
      }}
    >
      <Form className={css.form} autoComplete="on">
        <div className={css.formGroup}>
          <label htmlFor={emailField} className={css.label}>
            Email
          </label>
          <Field type="email" name="email" id={emailField} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formGroup}>
          <label className={css.label} htmlFor={passwordField}>
            Password
          </label>
          <Field type="password" name="password" id={passwordField} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <div className={css.btnGroup}>
          <button className={css.btn} type="submit">
            Log In
          </button>
        </div>
      </Form>
    </Formik>

    //    <label className={css.label}>
    //      Password
    //      <input type="password" name="password" />
    //    </label>
    //    <button type="submit">Log In</button>
    //  </form>
  );
};
