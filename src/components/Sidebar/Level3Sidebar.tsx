import React, { useContext } from "react";
import { DivarContext } from "../context/divarContext";
import { Box } from "@material-ui/core";
import SideItem from "./SideItem";
import { useParams } from "react-router";

interface PropsType {
  subcategoryRoute: string;
  subcategoryText: string
}

const Level3Sidebar = ({level2Subcategories} : {level2Subcategories?: PropsType[]}) => {
  const { routes } = useContext(DivarContext);
  //@ts-ignore
  const {city} = useParams()
  console.log(city);

  return (
    <Box ml={4} >
      {//@ts-ignore
      level2Subcategories.map(({ subcategoryRoute, subcategoryText }) => {
        return (
          <SideItem
            key={subcategoryText}
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
