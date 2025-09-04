import { transmissionOptions } from "../../utils/transmissionOptions.js";
import FilterCards from "../FilterCards/FilterCards.jsx";

const TransmissionFilter = ({ selected, setSelected }) => {
  return (
    <div>
			<FilterCards
			title="Transmission"
			options={transmissionOptions}
			selected={selected}
			onChange={setSelected}
			multiple={false}/>
    </div>
  );
};

export default TransmissionFilter;