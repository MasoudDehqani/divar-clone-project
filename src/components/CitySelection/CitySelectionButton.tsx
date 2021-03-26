import { Button } from '@material-ui/core'
import React from 'react'

const CitySelectionButton = ({text} : {text: string}) => {
  return (
    <Button variant="outlined" style={{color: "#a12727", width: "80px", fontFamily: "Vazir"}}>
      {text}
    </Button>
  )
}

export default CitySelectionButton

// #a12727