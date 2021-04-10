import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router } from "react-router-dom"
import './App.css';
import DivarContextProvider from './components/context/divarContext';
import Divar from './components/Divar/Divar'
import RTL from "./RTL"
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  direction: 'rtl',
});

function App() {
  return (
    <Router>
      <DivarContextProvider>
        <ThemeProvider theme={theme}>
          <RTL>
            <Divar />
          </RTL>
        </ThemeProvider>
      </DivarContextProvider>
    </Router>
  )
}

export default App;