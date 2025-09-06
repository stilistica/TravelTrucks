import s from "./RatingLocation.module.css";
import sprite from "../../assets/icons/sprite.svg";

const RatingLocation = ({ rating, reviews, location }) => {
  return (
    <div className={s.container}>
      <p className={s.rating}>
        <svg className={s.icon}>
          <use href={`${sprite}#icon-star`}></use>
        </svg>
        {rating}({reviews.length} Reviews)
      </p>
      <p className={s.location}>
        <svg className={s.icon}>
          <use href={`${sprite}#icon-map`}></use>
        </svg>
        {location}
      </p>
    </div>
  );
};

export default RatingLocation;
