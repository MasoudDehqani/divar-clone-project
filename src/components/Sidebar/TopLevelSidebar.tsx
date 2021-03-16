import React, { useContext } from 'react'
import { List } from "@material-ui/core"
// import { useRouteMatch } from "react-router-dom"
import SideItem from './SideItem'
import { DivarContext } from "../context/divarContext"
import { topLevelRoutesTitlesIcons } from "./dataStructured"

const TopLevelSidebar = () => {

  const context = useContext(DivarContext)
  // console.log("TopLevelSidebar")

  // const { url } = useRouteMatch()
  // context.setUrl(url)

  return (
    <List>
      {topLevelRoutesTitlesIcons.map( ({ route, text, icon }) => 
        <SideItem
          key={text} 
          onClick={() => {
            context.routes.topLevel = route
            context.routes.level2 = ""
            context.routes.level3 = ""
          }}
          linkToGo={`/tehran/${route}`} 
          Icon={icon} 
          text={text} 
        />
      )}
    </List>    
  )
}

export default TopLevelSidebar
