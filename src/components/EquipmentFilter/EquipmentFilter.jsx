import { equipmentOptions } from "../../utils/equipmentOptions.js";
import FilterCards from "../FilterCards/FilterCards.jsx";

const EquipmentFilter = ({ selected, setSelected }) => {
	const handleChange = (newSelected) => {
		const obj = {};
		newSelected.forEach(item => {
			obj[item] =true;
		});
		setSelected(obj);
	};
  
	const selectedArray = Object.keys(selected).filter(k => selected[k]);

  return (
    <div>
			<FilterCards
			title="Vehicle equipment"
			options={equipmentOptions}
			selected={selectedArray}
			onChange={handleChange}
			multiple={true}/>
    </div>
  );
};

export default EquipmentFilter;
