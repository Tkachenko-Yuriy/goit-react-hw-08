import LoginForm from "../../components/LoginForm/LoginForm";
import Title from "../../components/Title/Title";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./Login.module.css";

export default function Login() {
  return (
    <div className={css.container}>
      <DocumentTitle>Login</DocumentTitle>
      <Title text="Login page" />
      <LoginForm />
    </div>
  );
}
