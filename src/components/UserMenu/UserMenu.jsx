import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/auth-selectors";
import Button from "../Button/Button";
import { FaUserTie } from "react-icons/fa";
import { logOut } from "../../redux/auth/auth-operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <span className={css.name}>
        Welcome, {user.name}
        <FaUserTie className={css.avatar} />
      </span>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </div>
  );
}
