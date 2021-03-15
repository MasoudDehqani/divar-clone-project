import React from 'react';
import './App.css';
import Divar from './components/Divar/Divar'
import DivarContextProvider from "./components/context/divarContext"

function App() {
  return (
    <DivarContextProvider>
      <Divar />
    </DivarContextProvider>
  )
}

export default App;
