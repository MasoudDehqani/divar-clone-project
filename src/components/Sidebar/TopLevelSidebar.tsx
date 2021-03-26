import React, { useContext } from "react";
import { List } from "@material-ui/core";
// import { useRouteMatch } from "react-router-dom"
import SideItem from "./SideItem";
import { DivarContext } from "../context/divarContext";
import { topLevelRoutesTitlesIcons } from "./dataStructured";
import Level2Sidebar from "./Level2Sidebar";
import ReturnToAll from "./ReturnToAll";

const TopLevelSidebar = () => {

  const { routes, city } = useContext(DivarContext);

  return (
    <List>
      {topLevelRoutesTitlesIcons.map(({ route, text, icon, subCategories }, index) => {
        if (route === routes.topLevel) {
          return (
            <>
            
              <ReturnToAll />

              <SideItem
                key={index}
                onClick={() => {
                  routes.topLevel = route;
                  routes.level2 = "";
                  routes.level3 = "";
                }}
                linkToGo={`/${city}/${route}`}
                text={text}
                Icon={icon}
                style={{ color: routes.topLevel === route ? "black" : "" }}
              />

              <Level2Sidebar subCategories={subCategories} />

            </>
          );
        }

        if (!routes.topLevel) {
          return (
            <SideItem
              key={index}
              onClick={() => {
                routes.topLevel = route;
                routes.level2 = "";
                routes.level3 = "";
              }}
              linkToGo={`/${city}/${route}`}
              Icon={icon}
              text={text}
            />
          );
        }
        return undefined
      })}
      
    </List>
  );
};

export default TopLevelSidebar;