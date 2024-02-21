import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/auth-selectors";
import { FaUserTie } from "react-icons/fa";
import { logOut } from "../../redux/auth/auth-operations";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 5,
    marginLeft: 5,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  console.log(name);

  return (
    <div style={styles.container}>
      <span style={styles.name}>
        Hello, {name}
        <FaUserTie style={styles.avatar} />
      </span>
      <button type="button" onClick={() => dispatch(logOut())}>
      Log out
      </button>
    </div>
  );
}
