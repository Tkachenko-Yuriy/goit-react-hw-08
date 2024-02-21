import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/auth-operations";
import Button from "../Button/Button";
import css from "./LoginForm.module.css";

const FeedbackSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password is too short - should be 6 characters minimum.")
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={css.input}
            type="text"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage name="email" as="span" />
        </div>

        <div className={css.wrapper}>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field
            className={css.input}
            type="text"
            name="password"
            id={passwordFieldId}
          />
          <ErrorMessage name="password" as="span" />
        </div>
        <Button text="Log in" type="submit" />
      </Form>
    </Formik>
  );
}
