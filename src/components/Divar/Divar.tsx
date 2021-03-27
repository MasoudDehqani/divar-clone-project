import React, { useContext } from 'react'
import Navbar from "../Navbar/Navbar"
import { Route, Switch } from "react-router-dom"
import { DivarContext } from "../context/divarContext"
import CitySelectionPage from '../CitySelection/CitySelectionPage'
import Main from '../Main/Main'

function Divar() {
  
  const { status } = useContext(DivarContext)
  console.log(status)

  if (!status) {
    return <h1>مالیدی</h1>
  }

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/:city/:category" component={Main} />             
        <Route path="/:city" component={Main} />              
        <Route exact path="/" component={CitySelectionPage} />
        <Route path="*" render={() => <h1>Not Found</h1>} />
      </Switch>
    </>
  )
}

export default Divar
