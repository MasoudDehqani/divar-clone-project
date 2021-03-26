import { Box, Link } from '@material-ui/core'
import { Link as RouterLink, useParams } from "react-router-dom"
import React, { useContext } from 'react'

function MenuItemsLevel2({itemsToRender} : {itemsToRender: any}) {

  //@ts-ignore
  const {city} = useParams()
  console.log(city);

  return (
    itemsToRender.map((subcategory: any, index: number, array: any) =>
      <Box width="fit-content" height="fit-content" display='flex' flexDirection="column" mb={2} mr={1} flexWrap="wrap">
        <Link color="textPrimary" component={RouterLink} underline="none" to={`/${city}/${subcategory.slug}`}>
          {index === array.indexOf(array[array.length - 1]) ? 
          <span style={{color: 'red', position: "absolute", bottom: "15px", left: "15px"}}>{subcategory.name}</span> :
          <span>{subcategory.name}</span>}            
        </Link>

        {subcategory.children.map((subcategoryLevel3: any) =>
          <Link color="textSecondary" component={RouterLink} underline="none" to={`/${city}/${subcategoryLevel3.slug}`}>
            <span style={{fontSize: "0.8rem"}}>{subcategoryLevel3.name}</span>  
          </Link> 
            )} 
      </Box>
    )
  )
}

export default MenuItemsLevel2
