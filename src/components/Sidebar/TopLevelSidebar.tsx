import React, { useContext } from "react";
import { List } from "@material-ui/core";
// import { useRouteMatch } from "react-router-dom"
import SideItem from "./SideItem";
import { DivarContext } from "../context/divarContext";
import { topLevelRoutesTitlesIcons } from "./dataStructured";
import Level2Sidebar from "./Level2Sidebar";
import ReturnToAll from "./ReturnToAll";
// import FilterButton from "./filters/FilterButton";
// import FilterSelect from "./filters/FilterSelect";
// import FilterSwitch from "./filters/FilterSwitch";

const TopLevelSidebar = () => {
  const { routes, city } = useContext(DivarContext);
  // console.log("TopLevelSidebar")

  // const { url } = useRouteMatch()
  // context.setUrl(url)

  console.log(routes)
  return (
    <List>
      {topLevelRoutesTitlesIcons.map(({ route, text, icon, subCategories }, index) => {
        if (route === routes.topLevel) {
          return (
            <>
            
              <ReturnToAll />

              <SideItem
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
      
      {/* <FilterButton filterText="دسته" />

      <FilterSelect />

      <FilterSwitch /> */}

    </List>
  );
};

export default TopLevelSidebar;