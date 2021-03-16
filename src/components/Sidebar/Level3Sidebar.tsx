import React, { useContext } from "react";
import { level3SubCategories } from "./dataStructured";
import { DivarContext } from "../context/divarContext";
import { Box, Link, ListItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Level3Sidebar = () => {
  const context = useContext(DivarContext);

  return (
    <div>
      {level3SubCategories.map(({ route, subcategories }) => {
        if (route === context.routes.level2) {
          return subcategories.map(({ subcategoryRoute, subcategoryText }) => {
            return (
              <Box mr={4} key={subcategoryText}>
                <Link
                  onClick={() => {
                    context.routes.level3 = subcategoryRoute;
                  }}
                  underline="none"
                  component={NavLink}
                  to={`/tehran/${subcategoryRoute}`}
                  activeStyle={{ color: "red" }}
                  color="textSecondary"
                >
                  <ListItem>
                    <span>{subcategoryText}</span>
                  </ListItem>
                </Link>
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
