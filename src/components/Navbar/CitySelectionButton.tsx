import React from 'react'
import { Button } from '@material-ui/core'
import { LocationOnRounded } from '@material-ui/icons'

const CitySelectionButton = ({onClick} : {onClick: React.MouseEventHandler<HTMLButtonElement>}) => {
  return (
    <Button onClick={onClick}>
      <LocationOnRounded style={{color: "rgba(0,0,0,0.4)", verticalAlign: 'middle'}} />
      <span style={{color: 'rgba(0,0,0,0.4)', fontFamily: "Vazir", fontStyle: "normal", fontWeight: 900, verticalAlign: 'middle'}}>تهران</span>
    </Button>
  )
}

export default CitySelectionButton
