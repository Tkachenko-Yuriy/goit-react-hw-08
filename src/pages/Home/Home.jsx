import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/auth-selectors";

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <Title text="Welcome to the home page of the phonebook." />
      {!isLoggedIn && (
        <p>
          This application is designed for convenient storage and use of your
          contacts. If you are new to our application, you need to register on
          the{" "}
          <Link to="/register">
            <b>register page</b>
          </Link>
          , if not, go to the{" "}
          <Link to="/login">
            <b>login page</b>
          </Link>
          .
        </p>
      )}
    </div>
  );
}
