import { typeOptions } from "../../utils/typeOptions.js";
import FilterCards from "../FilterCards/FilterCards.jsx";

const TypeFilter = ({ selected, setSelected }) => {
  return (
    <div>
			<FilterCards
			title="Vehicle type"
			options={typeOptions}
			selected={selected}
			onChange={setSelected}
			multiple={false}/>
    </div>
  );
};

export default TypeFilter;
