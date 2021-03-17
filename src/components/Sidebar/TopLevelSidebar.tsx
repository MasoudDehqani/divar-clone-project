import React, { useContext } from "react";
import { List } from "@material-ui/core";
// import { useRouteMatch } from "react-router-dom"
import SideItem from "./SideItem";
import { DivarContext } from "../context/divarContext";
import { topLevelRoutesTitlesIcons } from "./dataStructured";
import Level2Sidebar from "./Level2Sidebar";
import ReturnToAll from "./ReturnToAll";

const TopLevelSidebar = () => {
  const context = useContext(DivarContext);
  // console.log("TopLevelSidebar")

  // const { url } = useRouteMatch()
  // context.setUrl(url)

  console.log(context.routes)
  return (
    <List>
      {topLevelRoutesTitlesIcons.map(({ route, text, icon, subCategories }) => {
        if (route === context.routes.topLevel) {
          return (
            // <List key={text}>
            <>
            
              <ReturnToAll />

              <SideItem
                onClick={() => {
                  context.routes.topLevel = route;
                  context.routes.level2 = "";
                  context.routes.level3 = "";
                }}
                linkToGo={`/tehran/${route}`}
                text={text}
                Icon={icon}
                style={{ color: context.routes.topLevel === route ? "black" : "" }}
              />

              <Level2Sidebar subCategories={subCategories} />

            </>
          );
        }

        if (!context.routes.topLevel) {
          return (
            <SideItem
              key={text}
              onClick={() => {
                context.routes.topLevel = route;
                context.routes.level2 = "";
                context.routes.level3 = "";
              }}
              linkToGo={`/tehran/${route}`}
              Icon={icon}
              text={text}
            />
          );
        }
      })}
    </List>
  );
};

export default TopLevelSidebar;