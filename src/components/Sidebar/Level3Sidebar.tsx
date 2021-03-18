import React, { useContext } from "react";
import { DivarContext } from "../context/divarContext";
import { Box } from "@material-ui/core";
import SideItem from "./SideItem";

interface PropsType {
  subcategoryRoute: string;
  subcategoryText: string
}

const Level3Sidebar = ({level2Subcategories} : {level2Subcategories: PropsType[]}) => {
  const { routes, city } = useContext(DivarContext);

  return (
    <Box ml={4} >
      {level2Subcategories.map(({ subcategoryRoute, subcategoryText }) => {
        return (
          <SideItem
            onClick={() => { routes.level3 = subcategoryRoute }}
            linkToGo={`/${city}/${subcategoryRoute}`}
            text={subcategoryText}
            actStyle={{ color: "red" }}
          />
        );
      })}
    </Box>
  );
};

export default Level3Sidebar;
