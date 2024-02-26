import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from "./Register.module.css";
import Title from "../../components/Title/Title";

export default function Register() {
  return (
    <div className={css.container}>
      <Title text="Register page" />
      <RegisterForm />
    </div>
  );
}
