import s from "./LoadMore.module.css";

const LoadMore = ({ onClick, children }) => {
  return (
    <button className={s.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default LoadMore;
