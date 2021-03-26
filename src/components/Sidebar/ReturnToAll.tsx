import React, { useContext } from "react";
import SideItem from "./SideItem";
import { DivarContext } from "../context/divarContext";
import ArrowRight from "@material-ui/icons/ArrowRightAlt";
import { useParams } from "react-router";

const ReturnToAll = () => {
  const context = useContext(DivarContext);
  //@ts-ignore
  const {city} = useParams()
  console.log(city);

  return (
    <SideItem
      onClick={() => {
        context.routes.topLevel = "";
        context.routes.level2 = "";
        context.routes.level3 = "";
      }}
      linkToGo={`/${city}`}
      text="همه آگهی‌ها"
      Icon={ArrowRight}
    />
  );
};

export default ReturnToAll;
