import s from "./Button.module.css";

const Button = ({ onClick, children }) => {
  return (
    <button className={s.btn} onClick={onClick} aria-label="button">
      {children}
    </button>
  );
};

export default Button;
