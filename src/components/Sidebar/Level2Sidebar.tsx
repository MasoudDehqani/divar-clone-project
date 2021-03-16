import React, { useContext } from "react";
import SideItem from "./SideItem";
import ArrowRight from "@material-ui/icons/ArrowRightAlt";
// import { useRouteMatch } from 'react-router'
import { Box, Link, List, ListItem } from "@material-ui/core";
import {
  topLevelRoutesTitlesIcons,
  level3SubCategories,
  level2SubCategories,
} from "./dataStructured";
import { NavLink } from "react-router-dom";
import { DivarContext } from "../context/divarContext";
import Level3Sidebar from "./Level3Sidebar";
import ReturnToAll from "./ReturnToAll";

interface SubCategoriesType {
  subCategoryRoute: string;
  subCategoryText: string
}

const Level2Sidebar = ({ subCategories } : { subCategories: SubCategoriesType[] }) => {
  const context = useContext(DivarContext);
  // console.log("Level2Sidebar")
  console.log("L2");

  // const { url } = useRouteMatch()
  // context.setUrl(url)

  return (
    <List>
      <Box mr={7}>
        {subCategories.map(({ subCategoryRoute, subCategoryText } : { subCategoryRoute: string; subCategoryText: string}) => {
            if (subCategoryRoute === context.routes.level2) {
              return (
                <>
                  <Link
                    onClick={() => {
                      context.routes.level2 = subCategoryRoute;
                    }}
                    underline="none"
                    component={NavLink}
                    to={`/tehran/${subCategoryRoute}`}
                    color="textSecondary"
                    style={{ color: context.routes.level2 === subCategoryRoute ? "black" : "" }}
                  >
                    <ListItem>
                      <span>{subCategoryText}</span>
                    </ListItem>
                  </Link>
                  <Level3Sidebar />
                </>
              );
            }

            if (!context.routes.level2) {
              return (
                <Link
                  onClick={() => {
                    context.routes.level2 = subCategoryRoute;
                  }}
                  underline="none"
                  component={NavLink}
                  to={`/tehran/${subCategoryRoute}`}
                  color="textSecondary"
                >
                  <ListItem>
                    <span>{subCategoryText}</span>
                  </ListItem>
                </Link>
              );
            }
          }
        )}
      </Box>
    </List>
  );
};

export default Level2Sidebar;
