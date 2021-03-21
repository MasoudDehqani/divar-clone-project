import React, { useContext, useState } from 'react'
import Paper from "@material-ui/core/Paper"
import { allCategories } from "../Sidebar/dataStructured"
import { Box, Link, makeStyles } from '@material-ui/core'
import ArrowLeft from "@material-ui/icons/ArrowLeft"
import {Link as RouterLink} from "react-router-dom"
import { DivarContext } from '../context/divarContext'

const useStyle = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.2)"
    }
  }
})

function MenuItemsPaper() {

  const { routes, city } = useContext(DivarContext)

  const [menuItemOpen, setMenuItemOpen] = useState({
    id: 0,
    isOpen: false
  })

  const classes = useStyle()

  return (
    <Box display="flex" style={{position: "absolute"}} height="472px">
    <Paper style={{padding: "10px", display: 'flex', flexDirection: 'column', width: 200}}>
      <Link component={RouterLink} underline="none" to={`/${city}`}>
        <span onMouseOver={() => setMenuItemOpen({id: -1, isOpen: false})} style={{marginBottom: "10px"}}>همه آگهی‌ها</span>  
      </Link>
      {allCategories.children.map((category =>
        <Box onClick={() => setMenuItemOpen({id: -1, isOpen: false})} onMouseOver={() => setMenuItemOpen({id: category.id, isOpen: true})} className={classes.root} py={1} display="flex" justifyContent="space-between" alignItems="center" style={{cursor: "pointer"}}>
          <Link component={RouterLink} underline="none" to={`/${city}/${category.slug}`}>
            <span>{category.name}</span>
            <ArrowLeft />
          </Link>
        </Box>
      ))}
    </Paper>
    {allCategories.children.map(category => {
      if (category.id === menuItemOpen.id) {
        return category.children.map(subcategory =>
          <Box display="flex" flexDirection="column">
            <Link component={RouterLink} underline="none" to={`/${city}/${subcategory.slug}`}>
              <span style={{fontWeight: 900}}>{subcategory.name}</span>
            </Link>
            {subcategory.children.map(subcategoryLevel3 =>
              <Link component={RouterLink} underline="none" to={`/${city}/${subcategoryLevel3.slug}`}>
                <span>{subcategoryLevel3.name}</span>  
              </Link> 
            )} 
          </Box>
        )
      }
    }
    )}
    </Box>
  )
}

export default MenuItemsPaper
