import { engineOptions } from "../../utils/engineOptions.js";
import FilterCards from "../FilterCards/FilterCards.jsx";

const EngineFilter = ({ selected, setSelected }) => {
  return (
    <div>
			<FilterCards
			title="Engine"
			options={engineOptions}
			selected={selected}
			onChange={setSelected}
			multiple={false}/>
    </div>
  );
};

export default EngineFilter;