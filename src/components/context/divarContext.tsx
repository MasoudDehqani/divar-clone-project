import React, { createContext, useEffect, useState } from 'react'

export const DivarContext = createContext({data: [], getSetData: () => {}, routes: {topLevel: "", level2: ""}})

const DivarContextProvider = ({ children } : { children: React.ReactChild }) => {

  let topLevelRoute = ''

  const [data, setData] = useState([])

  const getSetData = async () => {
    const response = await ((await fetch("https://api.divar.ir/v8/web-search/tehran")).json())
    setData(response)
  }

  useEffect( () => {
    getSetData()
  }, [])
  
  return <DivarContext.Provider value={{data, getSetData, routes: {topLevel: "", level2: ""}}}>{children}</DivarContext.Provider>
}

export default DivarContextProvider
