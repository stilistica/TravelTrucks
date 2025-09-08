import s from "./CampersList.module.css";

import CamperCard from "../CamperCard/CamperCard";

const CampersList = ({ campers }) => {
  return (
    <ul className={s.list}>
      {campers.map((c) => (
        <li key={c.id}>
          <CamperCard camper={c} />
        </li>
      ))}
    </ul>
  );
};

export default CampersList;
