import s from "./NotFoundCamper.module.css";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { resetFilter } from "../../redux/campers/slice";

const NotFoundCamper = () => {
  const dispatch = useDispatch();

  const handleResetFilters = () => {
    dispatch(resetFilter());
  };
  return (
    <div className={s.container}>
      <p className={s.text}>За цим фільтром немає результатів</p>
      <Button onClick={handleResetFilters}>Reset filter</Button>
    </div>
  );
};

export default NotFoundCamper;
