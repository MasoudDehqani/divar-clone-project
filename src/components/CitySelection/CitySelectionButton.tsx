import { Button } from '@material-ui/core'
import React from 'react'

const CitySelectionButton = ({text, onClick} : {text: string; onClick: React.MouseEventHandler<HTMLButtonElement>}) => {
  return (
    <Button onClick={onClick} variant="outlined" style={{color: "#a12727", width: "80px", fontFamily: "Vazir"}}>
      {text}
    </Button>
  )
}

export default CitySelectionButton

// #a12727