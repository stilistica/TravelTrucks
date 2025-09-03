// import s from './CampersPage.module.css';
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectError,
  selectFilter,
  selectIsLoading,
  selectTotalItems,
} from "../../redux/campers/selectors";
import { getCampers } from "../../redux/campers/operations";
import { useEffect, useState } from "react";

import CampersList from "../../components/CampersList/CampersList";
import { resetFilter, setFilter, setPage } from "../../redux/campers/slice";

function CampersPage() {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const totalItems = useSelector(selectTotalItems);
  const filter = useSelector(selectFilter);

  const [location, setLocation] = useState(filter.location || "");
  const [equipment, setEquipment] = useState(filter.equipment || {});
  const [form, setForm] = useState(filter.form || "");

  useEffect(() => {
    dispatch(getCampers(filter));
  }, [dispatch, filter]);

  const handleLoadMore = () => {
    dispatch(setPage(filter.page + 1));
  };

  const handleApplyFilters = () => {
    dispatch(
      setFilter({
        page: 1,
        location,
        equipment,
        form,
      })
    );
  };

  const handleResetFilters = () => {
    setLocation("");
    setEquipment({});
    setForm("");
    dispatch(resetFilter());
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  if (!loading && campers.length === 0) {
  return <p>За цим фільтром немає результатів</p>;
}

  return (
    <>
      <div>
        <aside style={{ width: "250px" }}>
          <h3>Filters</h3>

          {/* Location */}
          <div>
            <label>Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Equipment */}
          <div>
            <h4>Equipment</h4>
            {["AC", "automatic", "kitchen", "TV", "bathroom"].map((eq) => (
              <label key={eq}>
                <input
                  type="checkbox"
                  checked={!!equipment[eq]}
                  onChange={(e) =>
                    setEquipment({
                      ...equipment,
                      [eq]: e.target.checked,
                    })
                  }
                />
                {eq}
              </label>
            ))}
          </div>

          {/* Type */}
          <div>
            <h4>Type</h4>
            {["van", "fullyIntegrated", "alcove"].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="form"
                  value={type}
                  checked={form === type}
                  onChange={() => setForm(type)}
                />
                {type}
              </label>
            ))}
          </div>

          {/* Кнопки */}
          <div style={{ marginTop: "10px" }}>
            <button onClick={handleApplyFilters}>Apply</button>
            <button onClick={handleResetFilters}>Reset</button>
          </div>
        </aside>
      </div>
      <CampersList campers={campers} />
      {campers.length < totalItems && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </>
  );
}

export default CampersPage;
