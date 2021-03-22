import React, { useContext } from 'react'
import Button from "@material-ui/core/Button"
import Link from "@material-ui/core/Link"
import { Link as RouterLink } from "react-router-dom"
import { DivarContext } from '../context/divarContext'

function SuggestionButton({text, categoryName} : {text: string, categoryName: string}) {

  const { city } = useContext(DivarContext)

  return (
    <Link underline="none" component={RouterLink} to={`/${city}/${categoryName}`}>
      <Button style={{fontFamily: "Vazir", color: "#a12727", border: "1px solid #a12727", borderRadius: "50px", margin: "0 5px", height: "30px"}} variant="outlined">
        {text}
      </Button>
    </Link>
  )
}

export default SuggestionButton
