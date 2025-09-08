import s from "./NotFoundCamper.module.css";
import Button from "../Button/Button";

const NotFoundCamper = ({ handleResetFilters }) => {
  return (
    <div className={s.container}>
      <p className={s.text}>За цим фільтром немає результатів</p>
      <Button onClick={handleResetFilters}>Reset filter</Button>
    </div>
  );
};

export default NotFoundCamper;
