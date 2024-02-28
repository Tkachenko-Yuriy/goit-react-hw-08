import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from "./Register.module.css";
import Title from "../../components/Title/Title";
import DocumentTitle from "../../components/DocumentTitle";

export default function Register() {
  return (
    <div className={css.container}>
      <DocumentTitle>Register</DocumentTitle>
      <Title text="Register page" />
      <RegisterForm />
    </div>
  );
}
