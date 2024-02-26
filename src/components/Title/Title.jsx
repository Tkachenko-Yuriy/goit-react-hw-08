import css from "./Title.module.css";
export default function Title({ text }) {
  return <h2 className={css.title}>{text}</h2>;
}
