import React, { useContext } from 'react'
import { List, ListItem, Link } from "@material-ui/core"
import { Switch, NavLink, useParams, Route } from "react-router-dom"
import SideItem from './SideItem'
import { DivarContext } from "../context/divarContext"
import { topLevelRoutesTitlesIcons } from "./dataStructured"
import Level2Sidebar from './Level2Sidebar'

const TopLevelSidebar = () => {

  const context = useContext(DivarContext)
  const param = useParams()
  console.log(context.routes)

  return (
    <List>
      {topLevelRoutesTitlesIcons.map( ({ route, text, icon }) => 
        <SideItem 
          onClick={() => context.setRoutes({ topLevel: route, level2: "", level3: "" })} 
          linkToGo={`/tehran/${route}`} 
          Icon={icon} 
          text={text} 
        />
      )}
    </List>    
  )
}

export default TopLevelSidebar
