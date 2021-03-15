import React, { useContext } from 'react'
import SideItem from "./SideItem"
import ArrowRight from "@material-ui/icons/ArrowRightAlt"
import { useHistory, useRouteMatch } from 'react-router'
import { Box, Link, List, ListItem } from '@material-ui/core'
import { topLevelRoutesTitlesIcons, level2SubCategories, level3SubCategories } from './dataStructured'
import { NavLink } from 'react-router-dom'
import { DivarContext } from '../context/divarContext'

const Level2Sidebar = () => {

  const context = useContext(DivarContext)
  console.log(context.routes)

  const history = useHistory()
  console.log(history)

  const { path, url } = useRouteMatch()
  console.log(path, url)

  return (
    <List>
      <SideItem 
        onClick={ () => context.setRoutes({ topLevel: "", level2: "", level3: "" })} 
        linkToGo={'/'} 
        text="همه آگهی‌ها" 
        Icon={ArrowRight}
      />
        {topLevelRoutesTitlesIcons.map( ({ route, text, icon, subCategories }) => {
          if (context.routes.topLevel === route) {
            return (
              <List>
                <SideItem 
                  onClick={() => context.setRoutes({ topLevel: route, level2: "", level3: "" })} 
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
                        <Link onClick={() => context.setRoutes( prev => ({ ...prev, level2: subCategoryRoute }))} underline="none" component={NavLink} to={`/tehran/${subCategoryRoute}`} color="textSecondary" style={{color: context.routes.level2 === subCategoryRoute ? "black" : ''}} >
                          <ListItem>
                            <span>{subCategoryText}</span>
                          </ListItem>
                        </Link>
                        {level3SubCategories.map(({route, subcategories}) => {
                          if (route === context.routes.level2) {
                            return subcategories.map( ({subcategoryRoute, subcategoryText}) => {
                              return (
                                <Box mr={4} >
                                  <Link onClick={() => context.setRoutes( prev => ({ ...prev, level3: subcategoryRoute }))} underline="none" component={NavLink} to={`/tehran/${subcategoryRoute}`} activeStyle={{color: "red"}} color="textSecondary" >
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
                        <Link onClick={() => context.setRoutes( prev => ({ ...prev, level2: subCategoryRoute }))} underline="none" component={NavLink} to={`/tehran/${subCategoryRoute}`} color="textSecondary" >
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