import React, { useContext, useState } from 'react'
import Paper from "@material-ui/core/Paper"
import { allCategories } from "../Sidebar/dataStructured"
import { Box, Grid, Link, makeStyles } from '@material-ui/core'
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
    <Box display="flex" style={{position: "absolute"}} height="550px">
    <Paper style={{padding: "10px", display: 'flex', flexDirection: 'column', width: 200}}>
      <Link component={RouterLink} color="textPrimary" underline="none" to={`/${city}`}>
        <span onMouseOver={() => setMenuItemOpen({id: -1, isOpen: false})} style={{marginBottom: "10px"}}>همه آگهی‌ها</span>  
      </Link>
      {allCategories.children.map((category =>
          <Link color="textPrimary" component={RouterLink} underline="none" to={`/${city}/${category.slug}`}>
            <Box onClick={() => setMenuItemOpen({id: -1, isOpen: false})} onMouseOver={() => setMenuItemOpen({id: category.id, isOpen: true})} className={classes.root} py={1} display="flex" justifyContent="space-between" alignItems="center" style={{cursor: "pointer"}}>
              <span>{category.name}</span>
              <ArrowLeft />
            </Box>
          </Link>
      ))}
    </Paper>
    <Paper style={{padding: "10px", display: !menuItemOpen.isOpen ? "none" : "flex", width: "600px", flexDirection: "column", flexWrap: 'wrap', fontSize: "0.9rem"}}>
    {allCategories.children.map(category => {
      if (category.id === menuItemOpen.id) {
        return category.children.map(subcategory =>
          <Box width="fit-content" height="fit-content" display='flex' flexDirection="column" mb={2} mr={1} flexWrap="wrap">
            <Link color="textPrimary" component={RouterLink} underline="none" to={`/${city}/${subcategory.slug}`}>
              <span style={{fontWeight: 900}}>{subcategory.name}</span>
            </Link>
            {subcategory.children.map(subcategoryLevel3 =>
              <Link color="textSecondary" component={RouterLink} underline="none" to={`/${city}/${subcategoryLevel3.slug}`}>
                <span style={{fontSize: "0.8rem"}}>{subcategoryLevel3.name}</span>  
              </Link> 
            )} 
          </Box>
        )
      }
    }
    )}
    </Paper>
    </Box>
  )
}

export default MenuItemsPaper
