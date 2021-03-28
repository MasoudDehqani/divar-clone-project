import React, { useContext } from 'react'
import Navbar from "../Navbar/Navbar"
import { Redirect, Route, Switch } from "react-router-dom"
import { DivarContext } from "../context/divarContext"
import CitySelectionPage from '../CitySelection/CitySelectionPage'
import Main from '../Main/Main'

function Divar() {
  
  const { status, city } = useContext(DivarContext)

  
  if (!status) {
    return <h1>مالیدی</h1>
  }
  
  console.log(city)
  if (!city) {
    return <CitySelectionPage />
  }


  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/:city/:category" component={Main} />             
        <Route path="/:city" component={Main} />              
        <Route exact path="/" render={() => <Redirect to={`/${city}`} />} />
        <Route path="*" render={() => <h1>Not Found</h1>} />
      </Switch>
    </>
  )
}

export default Divar
