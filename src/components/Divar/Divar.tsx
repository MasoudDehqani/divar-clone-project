import React, { useContext } from 'react'
import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import { BrowserRouter as Router } from "react-router-dom"
import DivarContextProvider, { DivarContext } from "../context/divarContext"

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CitySelection from '../CitySelection/CitySelection'
import { Box } from '@material-ui/core'
import Widgets from "../Widgets/Widgets"

const theme = createMuiTheme({
  direction: 'rtl',
});

function Divar() {

  const { city } = useContext(DivarContext)

  if (!city) {
    return <CitySelection />
  }

  return (
    <Router>
      <DivarContextProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Box display="flex">
            <Sidebar />
            <Box display="flex" flexDirection="column">
              <Header />
              <Widgets />
            </Box>
          </Box>
        </ThemeProvider>
      </DivarContextProvider>
    </Router>
  )
}

export default Divar
