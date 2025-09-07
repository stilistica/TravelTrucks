import s from './CamperPage.module.css';

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCamperById, selectError, selectIsLoading } from "../../redux/campers/selectors";
import Container from "../../components/Container/Container";
import CamperInfo from '../../components/CamperInfo/CamperInfo';
import { useEffect } from 'react';
import { getCamperById } from '../../redux/campers/operations';
import CamperTagsInfo from '../../components/CamperTagsInfo/CamperTagsInfo';

function CamperPage() {
  const {id} = useParams();
  const dispatch = useDispatch();

  const camper = useSelector((state) => selectCamperById(state, id));
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!camper) {
      dispatch(getCamperById(id));
    }
  }, [dispatch, id, camper])
  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error</p>
  }
  if (!camper) {
    return <p>Camper not found</p>
  }
  return (
    <>
    <Container>
      <div className={s.container}>
        <CamperInfo camper={camper}/>
        <CamperTagsInfo camper={camper}/>
      </div>
    </Container>
    </>
  )
}

export default CamperPage;