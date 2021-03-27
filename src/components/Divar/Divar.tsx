import React, { useContext } from 'react'
import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import DivarContextProvider, { DivarContext } from "../context/divarContext"

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CitySelectionPage from '../CitySelection/CitySelectionPage'
import { Box } from '@material-ui/core'
import Widgets from "../Widgets/Widgets"
import Main from '../Main/Main'

const theme = createMuiTheme({
  direction: 'rtl',
});

const routes = [
  {
    path: "/:city/:category",
    
  }
]

function Divar() {

  // if (!city) {
  //   return <CitySelectionPage />
  // }

  return (
    <Router>
      <DivarContextProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Switch>
            <Route exact path="/:city/:category" component={Main} />             
            <Route exact path="/:city" component={Main} />              
            <Route exact path="/" render={() => <Redirect to="/tehran" />} />
          </Switch>
        </ThemeProvider>
      </DivarContextProvider>
    </Router>
  )
}

export default Divar
