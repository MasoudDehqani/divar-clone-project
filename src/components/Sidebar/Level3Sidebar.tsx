import React, { useContext } from "react";
import { level3SubCategories } from "./dataStructured";
import { DivarContext } from "../context/divarContext";
import { Box, Link, ListItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import SideItem from "./SideItem";

const Level3Sidebar = () => {
  const context = useContext(DivarContext);

  return (
    <div>
      {level3SubCategories.map(({ route, subcategories }) => {
        if (route === context.routes.level2) {
          return subcategories.map(({ subcategoryRoute, subcategoryText }) => {
            return (
              <Box mr={4} key={subcategoryText}>
                <SideItem
                  onClick={() => { context.routes.level3 = subcategoryRoute }}
                  linkToGo={`/tehran/${subcategoryRoute}`}
                  text={subcategoryText}
                  actStyle={{ color: "red" }}
                />
              </Box>
            );
          });
        }
        return undefined;
      })}
    </div>
  );
};

export default Level3Sidebar;
