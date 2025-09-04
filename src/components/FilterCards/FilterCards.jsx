import s from "./FilterCards.module.css";

const FilterCards = ({ title, options, selected, onChange, multiple }) => {
  const handleClick = (key) => {
    if (multiple) {
      const newSelected = selected.includes(key)
        ? selected.filter((item) => item !== key)
        : [...selected, key];
      onChange(newSelected);
    } else {
      const newSelected = selected === key ? "" : key;
      onChange(newSelected);
    }
  };

  return (
    <div className={s.filter}>
      <h2 className={s.title}>{title}</h2>
      <hr />
      <ul className={s.list}>
        {options.map((opt) => (
          <li key={opt.key} >
            <button
              type="button"
              className={`${s.card} ${
                multiple
                  ? selected.includes(opt.key) && s.active
                  : selected === opt.key && s.active
              }`}
              onClick={() => handleClick(opt.key)}
            >
              <svg>
                <use href={opt.iconUrl}></use>
              </svg>
              <p>{opt.label}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCards;
