import s from "./CamperPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectCamperById,
  selectError,
  // selectIsLoading,
} from "../../redux/campers/selectors";
import Container from "../../components/Container/Container";
import CamperInfo from "../../components/CamperInfo/CamperInfo";
import { useEffect } from "react";
import { getCamperById } from "../../redux/campers/operations";
import CamperTagsInfo from "../../components/CamperTagsInfo/CamperTagsInfo";
import { ClipLoader } from "react-spinners";

function CamperPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector((state) => selectCamperById(state, id));
  // const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!camper) {
      dispatch(getCamperById(id));
    }
  }, [dispatch, id, camper]);

  if (error) {
    return <p>Error</p>;
  }
  return (
    <>
      <Container>
        <div className={s.container}>
          {/* {isLoading && (
            <div className={s.load}>
              <ClipLoader size={70} color="#D84343" />
            </div>
          )} */}
          {camper && (
            <div className={s.info}>
              <CamperInfo camper={camper} />
              <CamperTagsInfo camper={camper} />
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

export default CamperPage;
