import React, { useContext, useEffect } from 'react'
import { List, ListItem, Link } from "@material-ui/core"
import { Switch, NavLink, useParams, Route, useRouteMatch } from "react-router-dom"
import SideItem from './SideItem'
import { DivarContext } from "../context/divarContext"
import { topLevelRoutesTitlesIcons } from "./dataStructured"
import Level2Sidebar from './Level2Sidebar'

const TopLevelSidebar = () => {

  const context = useContext(DivarContext)

  const { path, url } = useRouteMatch()
  context.setUrl(url)
  console.log('toplevel rendered')
  // console.log(url)
  // console.log(context.url)

  // useEffect( () => {
  //   context.getSetData(url)
  // }, [url])

  // console.log(context.data)

  // context.routes.topLevel = "";
  // context.routes.level2 = "";
  // context.routes.level3 = "";

  return (
    <List>
      {topLevelRoutesTitlesIcons.map( ({ route, text, icon }) => 
        <SideItem 
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
