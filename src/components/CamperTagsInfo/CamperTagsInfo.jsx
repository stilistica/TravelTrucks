import { useState } from "react";
import s from "./CamperTagsInfo.module.css";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import Form from "../Form/Form";

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
				{activeTab === "features" && (
					<Features camper={camper}/>
				)}
				{activeTab === "reviews" && (
					<Reviews reviews={camper.reviews}/>
				)}
				<Form camperId={camper.id}/>
			</div>
    </div>
  );
};

export default CamperTagsInfo;
