import s from "./CampersPage.module.css";
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
import { ClipLoader } from "react-spinners";

import CampersList from "../../components/CampersList/CampersList";
import { setFilter, setPage } from "../../redux/campers/slice";
import LocationFilter from "../../components/LocationFilter/LocationFilter";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import EquipmentFilter from "../../components/EquipmentFilter/EquipmentFilter";
import TypeFilter from "../../components/TypeFilter/TypeFilter";
import TransmissionFilter from "../../components/TransmissionFilter/TransmissionFilter";
import EngineFilter from "../../components/EngineFilter/EngineFilter";

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
  const [transmission, setTransmission] = useState(filter.transmission || "");
  const [engine, setEngine] = useState(filter.engine || "");

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
        transmission,
        engine,
      })
    );
  };

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <Container>
        <div className={s.container}>
          <div className={s.filter}>
            <LocationFilter location={location} setLocation={setLocation} />

            <div className={s.optionsFilter}>
              <p className={s.title}>Filters</p>
              <EquipmentFilter
                selected={equipment}
                setSelected={setEquipment}
              />
              <TransmissionFilter
                selected={transmission}
                setSelected={setTransmission}
              />
              <EngineFilter selected={engine} setSelected={setEngine} />
              <TypeFilter selected={form} setSelected={setForm} />
            </div>

            <Button onClick={handleApplyFilters}>Search</Button>
          </div>

          <div>
            {loading ? (
              <ClipLoader size={70} color="#D84343"/>
            ) : campers.length === 0 ? (
              <p>За цим фільтром немає результатів</p>
            ) : (
              <>
                <CampersList campers={campers} />
                {campers.length < totalItems && (
                  <button onClick={handleLoadMore}>Load More</button>
                )}
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export default CampersPage;
