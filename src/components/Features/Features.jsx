import EquipmentElements from "../EquipmentElements/EquipmentElements";
import { typeOptions } from "../../utils/typeOptions.js";
import { transmissionOptions } from "../../utils/transmissionOptions.js";
import { engineOptions } from "../../utils/engineOptions.js";
import s from "./Features.module.css";

const Features = ({ camper }) => {
  const formLabel =
    typeOptions.find((option) => option.key === camper.form)?.label ||
    camper.form;
  const transmissionLabel =
    transmissionOptions.find((option) => option.key === camper.transmission)
      ?.label || camper.transmission;
  const engineLabel =
    engineOptions.find((option) => option.key === camper.engine)?.label ||
    camper.engine;

  return (
    <div className={s.container}>
      <EquipmentElements camper={camper} />
      <div className={s.details}>
        <h2 className={s.title}>Vehicle details</h2>
        <hr />
        <ul className={s.list}>
          <li className={s.item}>
            <p className={s.nameValue}>Form</p>
            <p className={s.value}>{formLabel}</p>
          </li>
          <li className={s.item}>
            <p className={s.nameValue}>Length</p>
            <p className={s.value}>{camper.length}</p>
          </li>
          <li className={s.item}>
            <p className={s.nameValue}>Width</p>
            <p className={s.value}>{camper.width}</p>
          </li>
          <li className={s.item}>
            <p className={s.nameValue}>Height</p>
            <p className={s.value}>{camper.height}</p>
          </li>
          <li className={s.item}>
            <p className={s.nameValue}>Tank</p>
            <p className={s.value}>{camper.tank}</p>
          </li>
          <li className={s.item}>
            <p className={s.nameValue}>Consumption</p>
            <p className={s.value}>{camper.consumption}</p>
          </li>
          <li className={s.item}>
            <p className={s.nameValue}>Transmission</p>
            <p className={s.value}>{transmissionLabel}</p>
          </li>
          <li className={s.item}>
            <p className={s.nameValue}>Engine</p>
            <p className={s.value}>{engineLabel}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
