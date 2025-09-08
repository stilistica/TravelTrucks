import { useState } from "react";
import s from "./CamperTagsInfo.module.css";
import Features from "../Features/Features.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import FormBooking from "../FormBooking/FormBooking.jsx";

const CamperTagsInfo = ({ camper }) => {
  const [activeTab, setActiveTab] = useState("features");
  return (
    <div className={s.container}>
      <div className={s.btnTags}>
        <button
          className={activeTab === "features" ? s.active : ""}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={activeTab === "reviews" ? s.active : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
      <div className={s.infoTabs}>
        {activeTab === "features" && <Features camper={camper} />}
        {activeTab === "reviews" && <Reviews reviews={camper.reviews} />}
        <FormBooking />
      </div>
    </div>
  );
};

export default CamperTagsInfo;
