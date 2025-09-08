import s from "./ReviewItem.module.css";
import sprite from "../../assets/icons/sprite.svg";

const ReviewItem = ({ review }) => {
  const { reviewer_name, reviewer_rating, comment } = review;

  const firstLetter = reviewer_name.charAt(0).toUpperCase();

  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      className={`${s.star} ${index < reviewer_rating ? s.filled : ""}`}
    >
      <use href={`${sprite}#icon-star`} />
    </svg>
  ));
  return (
    <div className={s.review}>
      <div className={s.info}>
        <div className={s.avatar}>{firstLetter}</div>
        <div className={s.content}>
          <p className={s.name}>{reviewer_name}</p>
          <div className={s.stars}>{stars}</div>
        </div>
      </div>
      <p className={s.comment}>{comment}</p>
    </div>
  );
};

export default ReviewItem;
