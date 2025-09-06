import s from "./EquipmentElements.module.css";
import { equipmentOptions } from "../../utils/equipmentOptions.js";

const EquipmentElements = ({ camper }) => {
  return (
    <ul className={s.list}>
      {equipmentOptions.map((opt) => {
        const hasEquipment = camper[opt.key];
        if (!hasEquipment) return null;
        return (
          <li key={opt.key} className={s.item}>
            <svg className={s.icon}>
              <use href={opt.iconUrl}></use>
            </svg>
            <p>{opt.label}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default EquipmentElements;
