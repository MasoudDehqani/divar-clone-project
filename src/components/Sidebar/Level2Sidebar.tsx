import React, { useCallback, useContext, useEffect, useState } from 'react'
import SideItem from "./SideItem"
import ArrowRight from "@material-ui/icons/ArrowRightAlt"
import { useHistory, useRouteMatch } from 'react-router'
import { Box, Link, List, ListItem } from '@material-ui/core'
import { topLevelRoutesTitlesIcons, level2SubCategories, level3SubCategories } from './dataStructured'
import { NavLink } from 'react-router-dom'
import { DivarContext } from '../context/divarContext'

const Level2Sidebar = () => {

  const context = useContext(DivarContext)
  // console.log(context.data)
  console.log("level2 rendered")

  const { path, url } = useRouteMatch()
  // context.url = url
  context.setUrl(url)
  // console.log(url)
  // console.log(context.url)
  // console.log(context.routes)
  // //@ts-ignore
  // console.log(context.data.seo_details?.bread_crumbs)
  // const levels: string[] = []
  
  // //@ts-ignore
  // context.data.seo_details?.bread_crumbs.forEach( item => {
  //   item.url.includes("/") && levels.unshift(item.url.substr(7))
  // })
  // console.log(levels)

  // const callback = useCallback( () => {
  //   context.setRoutes({topLevel: levels[2] ? levels[2] : "", level2: levels[1] ? levels[1] : "", level3: levels[0] ? levels[0] : ""})
  // }, [url])

  // context.routes.topLevel = levels[0] ? levels[0] : "";
  // context.routes.level2 = levels[1] ? levels[1] : "";
  // context.routes.level3 = levels[2] ? levels[2] : "";

  // console.log(context.routes)
  
  // useEffect( () => {
  //   context.getSetData(url)
  // }, [url])
  

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
              <List>
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
                                <Box mr={4} >
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
                    
                  })}
                </Box>
              </List>
            )
          }
        }
      )}
    </List>
  )
}

export default Level2Sidebar