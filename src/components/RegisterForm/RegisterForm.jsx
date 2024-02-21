import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operations";
import Button from "../Button/Button";
import css from "./RegisterForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, "Password is too short - should be 7 characters minimum.")
    .required("Password is required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export default function RegisterForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      g
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label htmlFor={nameFieldId}>Username</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage name="name" as="span" />
        </div>
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
            type="password"
            name="password"
            id={passwordFieldId}
          />
          <ErrorMessage name="password" as="span" />
        </div>
        <Button text="Register" type="submit" />
      </Form>
    </Formik>
  );
}
