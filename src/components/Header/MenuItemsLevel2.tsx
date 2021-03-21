import { Paper } from '@material-ui/core'
import React from 'react'

function MenuItemsLevel2({itemsToRender} : {itemsToRender: any}) {
  return (
    <Paper style={{position: "absolute", padding: "10px", display: 'flex', flexDirection: 'column'}}>
      {itemsToRender.map}
    </Paper>
  )
}

export default MenuItemsLevel2
