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
import { setPage } from "../../redux/campers/slice";

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
    dispatch(setPage( filter.page + 1 ))
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  
  return (
    <>
      <CampersList campers={campers} />
      {campers.length < totalItems && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </>
  );
}

export default CampersPage;
