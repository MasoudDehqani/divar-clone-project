import React, { createContext, useEffect, useState } from 'react'

function getSession() {
  const savedRoutes = sessionStorage.getItem("routes")
  if (savedRoutes) return JSON.parse(savedRoutes)
  return {topLevel: "", level2: "", level3: ""}
}

interface ContextType {
  data: never[];
  getSetData: Function;
  routes: {topLevel: string; level2: string; level3: string};
  setRoutes: React.Dispatch<React.SetStateAction<{}>>
}

export const DivarContext = createContext<ContextType>({data: [], getSetData: () => {}, routes: {topLevel: "", level2: "", level3: ""}, setRoutes: () => {}})

const DivarContextProvider = ({ children } : { children: React.ReactChild }) => {

  const [data, setData] = useState([])
  const [routes, setRoutes] = useState(getSession)

  const getSetData = async () => {
    const response = await ((await fetch("https://api.divar.ir/v8/web-search/tehran")).json())
    setData(response)
  }

  useEffect( () => {
    getSetData()
    sessionStorage.setItem("routes", JSON.stringify(routes))
  }, [routes])
  
  return <DivarContext.Provider value={{data, getSetData, routes , setRoutes }}>{children}</DivarContext.Provider>
}

export default DivarContextProvider
