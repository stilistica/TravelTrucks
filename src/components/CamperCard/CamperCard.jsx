import { useNavigate } from "react-router-dom";
import s from "./CamperCard.module.css";
import PriceLikes from "../PriceLikes/PriceLikes";
import RatingLocation from "../RatingLocation/RatingLocation";
import EquipmentElements from "../EquipmentElements/EquipmentElements";
import Button from "../Button/Button";

const CamperCard = ({ camper }) => {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate(`/catalog/${camper.id}`);
  };

  return (
    <div className={s.card}>
      <img
        src={camper.gallery?.[0]?.thumb}
        alt={camper.name}
        className={s.image}
      />
      <div className={s.info}>
        <div className={s.mainInfo}>
          <div className={s.nameLikes}>
            <h2 className={s.name}>{camper.name}</h2>
            <PriceLikes camper={camper} />
          </div>
          <RatingLocation
            rating={camper.rating}
            reviews={camper.reviews}
            location={camper.location}
          />
        </div>
        <p className={s.description}>{camper.description}</p>
        <EquipmentElements camper={camper} />
        <div className={s.btn}>
          <Button onClick={handleShowMore}>Show more</Button>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
