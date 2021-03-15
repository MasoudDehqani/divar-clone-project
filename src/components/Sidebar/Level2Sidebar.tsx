import React, { useContext } from 'react'
import SideItem from "./SideItem"
import ArrowRight from "@material-ui/icons/ArrowRightAlt"
import { useHistory, useRouteMatch } from 'react-router'
import { Box, Link, List, ListItem } from '@material-ui/core'
import { topLevelRoutesTitlesIcons, level2SubCategories, level3SubCategories } from './dataStructured'
import { NavLink } from 'react-router-dom'
import { DivarContext } from '../context/divarContext'

const Level2Sidebar = ({ categories } : { categories: string[] }) => {

  const context = useContext(DivarContext)

  const history = useHistory()
  console.log(history)

  const { path, url } = useRouteMatch()
  console.log(path, url)

  return (
    <List>
      <SideItem 
        onClick={() => {
          context.routes.topLevel = ''
          context.routes.level2 = ''
        }} 
        linkToGo={'/'} 
        text="همه آگهی‌ها" 
        Icon={ArrowRight} actStyle={{}} 
      />
        {topLevelRoutesTitlesIcons.map( ({ route, text, icon, subCategories }) => {
          if (context.routes.topLevel === route) {
            return (
              <List>
                <SideItem 
                  onClick={() => {
                    context.routes.topLevel = route
                    context.routes.level2 = ''
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
                        <Link onClick={() => context.routes.level2 = subCategoryRoute} underline="none" component={NavLink} to={`/tehran/${subCategoryRoute}`} color="textSecondary" style={{color: context.routes.level2 === subCategoryRoute ? "black" : ''}} >
                          <ListItem>
                            <span>{subCategoryText}</span>
                          </ListItem>
                        </Link>
                        {level3SubCategories.map(({route, subcategories}) => {
                          if (route === context.routes.level2) {
                            return subcategories.map( ({subcategoryRoute, subcategoryText}) => {
                              return (
                                <Box mr={4}>
                                  <Link underline="none" component={NavLink} to={`/tehran/${subcategoryRoute}`} activeStyle={{color: "red"}} color="textSecondary" >
                                    <ListItem>
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
                        <Link onClick={() => context.routes.level2 = subCategoryRoute} underline="none" component={NavLink} to={`/tehran/${subCategoryRoute}`} color="textSecondary" >
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
          console.log(context.routes.topLevel, context.routes.level2)
          // subCategories.map( ({subCategoryRoute, subCategoryText}) => {
          //   if (url === `/tehran/${subCategoryRoute}`) {

          //   }
          // })
        }
      )}
    </List>
  )
}

export default Level2Sidebar


// console.log(`/tehran/${subCategoryRoute}`)
//               if (url === `/tehran/${subCategoryRoute}`) {
//                 return (
//                   <>
//                     <Link underline="none" component={NavLink} to={`/tehran/${subCategoryRoute}`} color="textSecondary" activeStyle={{color: "black"}} >
//                       <ListItem>
//                         <span>{subCategoryText}</span>
//                       </ListItem>
//                     </Link>
//                     {}                   
//                   </>
//                 )
//               }


// {level3SubCategories.map( ({route, subcategories}) => {
//   const level3Items = subcategories.map( ({subcategoryRoute, subcategoryText}) => {
//     if (url === `/tehran/${subcategoryRoute}`) {
//       return (
//         <Link underline="none" component={NavLink} to={`/tehran/${subcategoryRoute}`} color="textSecondary" activeStyle={{color: "black"}}>
//           <ListItem>{subcategoryText}</ListItem>
//         </Link>

//       )
//     }
//   })
//   return (
//     <List>
//       {level3Items}
//     </List>
//   )
// })}