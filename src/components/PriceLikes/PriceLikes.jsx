import s from "./PriceLikes.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/campers/selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/campers/slice.js";
import { formatPrice } from "../../utils/formatPrice.js";

const PriceLikes = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.includes(camper.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(camper.id));
    } else {
      dispatch(addToFavorites(camper.id));
    }
  };

  return (
    <div className={s.container}>
      <p className={s.price}>{formatPrice(camper.price)}</p>
      <button onClick={toggleFavorite} className={s.favoriteBtn}>
        <svg className={isFavorite ? s.heartActive : s.heart}>
          <use href={`${sprite}#icon-like`}></use>
        </svg>
      </button>
    </div>
  );
};

export default PriceLikes;
