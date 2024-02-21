import css from "./Button.module.css";

export default function Button({ text, type, onClick }) {
  return (
    <button className={css.button} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
