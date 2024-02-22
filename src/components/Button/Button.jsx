import css from "./Button.module.css";

export default function Button({ type, onClick, children }) {
  return (
    <button className={css.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
