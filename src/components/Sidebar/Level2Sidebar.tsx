import React, { useContext } from 'react'
import SideItem from "./SideItem"
import ArrowRight from "@material-ui/icons/ArrowRightAlt"
// import { useRouteMatch } from 'react-router'
import { Box, Link, List, ListItem } from '@material-ui/core'
import { topLevelRoutesTitlesIcons, level3SubCategories } from './dataStructured'
import { NavLink } from 'react-router-dom'
import { DivarContext } from '../context/divarContext'

const Level2Sidebar = () => {

  const context = useContext(DivarContext)
  // console.log("Level2Sidebar")

  // const { url } = useRouteMatch()
  // context.setUrl(url)
  

  return (
    <List>
      <SideItem 
        onClick={ () => {
          context.routes.topLevel = ""
          context.routes.level2 = ""
          context.routes.level3 = ""
        }} 
        linkToGo={'/'} 
        text="همه آگهی‌ها" 
        Icon={ArrowRight}
      />
        {topLevelRoutesTitlesIcons.map( ({ route, text, icon, subCategories }) => {
          if (context.routes.topLevel === route) {
            return (
              <List key={text}>
                <SideItem
                  onClick={() => {
                    context.routes.topLevel = route
                    context.routes.level2 = ""
                    context.routes.level3 = ""
                  }} 
                  linkToGo={`/tehran/${route}`} 
                  text={text} 
                  Icon={icon} 
                  style={{color: context.routes.topLevel === route ? "black" : ''}} 
                />
                <Box mr={7}>
                  {subCategories.map( ({subCategoryRoute, subCategoryText}) => {
                    if (subCategoryRoute === context.routes.level2) {
                      return (
                        <>
                        <Link onClick={() => {
                          context.routes.level2 = subCategoryRoute
                        }} underline="none" component={NavLink} to={`/tehran/${subCategoryRoute}`} color="textSecondary" style={{color: context.routes.level2 === subCategoryRoute ? "black" : ''}} >
                          <ListItem>
                            <span>{subCategoryText}</span>
                          </ListItem>
                        </Link>
                        {level3SubCategories.map(({route, subcategories}) => {
                          if (route === context.routes.level2) {
                            return subcategories.map( ({subcategoryRoute, subcategoryText}) => {
                              return (
                                <Box mr={4} key={subcategoryText} >
                                  <Link onClick={() => {
                                    context.routes.level3 = subcategoryRoute
                                  }} underline="none" component={NavLink} to={`/tehran/${subcategoryRoute}`} activeStyle={{color: "red"}} color="textSecondary" >
                                    <ListItem >
                                      <span>{subcategoryText}</span>
                                    </ListItem>
                                  </Link>
                                </Box>
                              )
                            })
                          }
                          return undefined
                        })}
                        </>
                      )
                      
                    }

                    if (!context.routes.level2) {
                      return (
                        <Link onClick={() => {
                          context.routes.level2 = subCategoryRoute
                        }} underline="none" component={NavLink} to={`/tehran/${subCategoryRoute}`} color="textSecondary" >
                          <ListItem>
                            <span>{subCategoryText}</span>
                          </ListItem>
                        </Link>
                        )
                    }
                    return undefined
                  })}
                </Box>
              </List>
            )
          }
          return undefined
        }
      )}
    </List>
  )
}

export default Level2Sidebar