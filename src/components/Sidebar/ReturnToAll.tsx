import React, { useContext } from "react";
import SideItem from "./SideItem";
import { DivarContext } from "../context/divarContext";
import ArrowRight from "@material-ui/icons/ArrowRightAlt";

const ReturnToAll = () => {
  const context = useContext(DivarContext);

  return (
    <SideItem
      onClick={() => {
        context.routes.topLevel = "";
        context.routes.level2 = "";
        context.routes.level3 = "";
      }}
      linkToGo={"/"}
      text="همه آگهی‌ها"
      Icon={ArrowRight}
    />
  );
};

export default ReturnToAll;
