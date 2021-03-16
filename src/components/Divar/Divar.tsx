import React from 'react'
import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import { BrowserRouter as Router } from "react-router-dom"
import DivarContextProvider from "../context/divarContext"

function Divar() {
  return (
    <Router>
      <DivarContextProvider>
        <>
          <Navbar />
          <Header />
          <Sidebar />
        </>
      </DivarContextProvider>
    </Router>
  )
}

export default Divar
