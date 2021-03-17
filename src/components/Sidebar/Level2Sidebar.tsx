import React, { useContext } from "react";
import { Box, Link, List, ListItem } from "@material-ui/core";

import { NavLink } from "react-router-dom";
import { DivarContext } from "../context/divarContext";
import Level3Sidebar from "./Level3Sidebar";
import SideItem from "./SideItem";

interface SubCategoriesType {
  subCategoryRoute: string;
  subCategoryText: string
}

const Level2Sidebar = ({ subCategories } : { subCategories: SubCategoriesType[] }) => {

  const context = useContext(DivarContext);

  return (
    <List>
      <Box mr={7}>
        {subCategories.map(({ subCategoryRoute, subCategoryText } : { subCategoryRoute: string; subCategoryText: string}) => {
          if (subCategoryRoute === context.routes.level2) {
            return (
              <>
                <SideItem
                  onClick={() => { context.routes.level2 = subCategoryRoute }}
                  linkToGo={`/tehran/${subCategoryRoute}`}
                  text={subCategoryText}
                  style={{ color: context.routes.level2 === subCategoryRoute ? "black" : "" }}
                />

                <Level3Sidebar />

              </>
            );
          }

          if (!context.routes.level2) {
            return (
              <SideItem
                  onClick={() => { context.routes.level2 = subCategoryRoute }}
                  linkToGo={`/tehran/${subCategoryRoute}`}
                  text={subCategoryText}
              />
            );
          }
        }
      )}
    </Box>
  </List>
  );
};

export default Level2Sidebar;
