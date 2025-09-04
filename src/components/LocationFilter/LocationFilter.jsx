import { useEffect, useState } from "react";
import s from "./LocationFilter.module.css";
import Select from "react-select";
import { fetchCampers } from "../../utils/api";
import sprite from "../../assets/icons/sprite.svg";

const LocationFilter = ({ location, setLocation }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function loadLocation() {
      const data = await fetchCampers({});
      const unique = [...new Set(data.items.map((c) => c.location))];
      const options = unique.map((loc) => ({
        value: loc,
        label: loc,
      }));
      setLocations(options);
    }
    loadLocation();
  }, []);

  return (
    <div className={s.location}>
      <label className={s.label}>Location</label>
      <div className={s.inputWrapper}>
        <svg className={`${s.icon} ${location ? s.activeIcon : ""}`}>
          <use href={`${sprite}#icon-map`}></use>
        </svg>
        <Select
          className={s.basicSingle}
          classNamePrefix="select"
          placeholder="City"
          isClearable
          isSearchable
          options={locations}
          value={location ? { value: location, label: location } : null}
          onChange={(selected) => setLocation(selected ? selected.value : "")}
          styles={{
            control: (base, state) => ({
              ...base,
              backgroundColor: "var(--color-inputs)",
              borderColor: state.isFocused
                ? "var(--color-main)"
                : "var(--color-inputs)",
              borderRadius: "12px",
              minHeight: "56px",
              padding: "14px 20px 14px 38px",
              boxShadow: "none",
              "&:hover": { borderColor: "var(--color-main)" },
            }),
            singleValue: (base) => ({
              ...base,
              color: "var(--color-main)",
            }),
            placeholder: (base) => ({
              ...base,
              color: "var(--color-gray)",
            }),
            menu: (base) => ({
              ...base,
              borderRadius: "8px",
              border: "1px solid var(--color-inputs)",
              marginTop: "4px",
              zIndex: 100,
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isSelected
                ? "var(--color-button)" // вибраний пункт
                : state.isFocused
                ? "rgba(255, 89, 89, 0.1)" // ховер (підсвітка червоним)
                : "white", // звичайний
              color: state.isSelected
                ? "white" // текст білий для активного
                : state.isFocused
                ? "var(--color-main)" // червоний при ховері
                : "var(--color-main-dark)", // стандартний колір тексту
              cursor: "pointer",
              "&:active": {
                backgroundColor: "rgba(255, 89, 89, 0.2)", // світліший червоний при кліку
                color: "var(--color-main)",
              },
            }),
          }}
        />
      </div>
    </div>
  );
};

export default LocationFilter;
