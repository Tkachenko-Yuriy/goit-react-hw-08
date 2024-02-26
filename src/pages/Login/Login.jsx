import LoginForm from "../../components/LoginForm/LoginForm";
import Title from "../../components/Title/Title";
import css from "./Login.module.css";

export default function Login() {
  return (
    <div className={css.container}>
      <Title text="Login page" />
      <LoginForm />
    </div>
  );
}
