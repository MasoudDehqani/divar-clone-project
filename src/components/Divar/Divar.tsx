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

const theme = createMuiTheme({
  direction: 'rtl',
});

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
            {/* <Route exact path="/tehran/:category/:district" component={TopLevelSidebar} /> */}
            <Route exact path="/:city/:category">
              <Box display="flex">
                <Sidebar />
                <Box display="flex" flexDirection="column">
                  <Header />
                  <Widgets />
                </Box>
              </Box>
            </Route>
            <Route exact path="/:city">
              <Box display="flex">
                <Sidebar />
                <Box display="flex" flexDirection="column">
                  <Header />
                  <Widgets />
                </Box>
              </Box>
            </Route>
            <Route exact path="/" render={() => <Redirect to="/tehran" />} />
          </Switch>
          {/* <Box display="flex">
            <Sidebar />
            <Box display="flex" flexDirection="column">
              <Header />
              <Widgets />
            </Box>
          </Box> */}
        </ThemeProvider>
      </DivarContextProvider>
    </Router>
  )
}

export default Divar
