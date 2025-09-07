import s from "./CamperInfo.module.css";
import RatingLocation from "../RatingLocation/RatingLocation.jsx";
import PriceLikes from "../PriceLikes/PriceLikes.jsx";

const CamperInfo = ({ camper }) => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <h1 className={s.name}>{camper.name}</h1>
        <div className={s.priceLikes}>
          <RatingLocation
            rating={camper.rating}
            reviews={camper.reviews}
            location={camper.location}
          />
          <PriceLikes camper={camper} />
        </div>
      </div>
      <ul className={s.galleryContainer}>
        {camper.gallery?.map((img, idx) => (
          <li key={idx} className={s.gallery}>
            <img
              src={img.thumb}
              alt={`${camper.name}-${idx}`}
              className={s.image}
            />
          </li>
        ))}
      </ul>
      <p className={s.description}>{camper.description}</p>
    </div>
  );
};

export default CamperInfo;
