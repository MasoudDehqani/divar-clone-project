import React, { createContext, useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'

// function getSession() {
//   const savedRoutes = sessionStorage.getItem("routes")
//   if (savedRoutes) return JSON.parse(savedRoutes)
//   return {topLevel: "", level2: "", level3: ""}
// }

interface ContextType {
  data: never[];
  getSetData: Function;
  routes: {topLevel: string; level2: string; level3: string};
}

export const DivarContext = createContext<ContextType>({data: [], getSetData: () => {}, routes: {topLevel: "", level2: "", level3: ""}})

const DivarContextProvider = ({ children } : { children: React.ReactChild }) => {

  const [data, setData] = useState([])
  // const [routes, setRoutes] = useState({})

  const getSetData = async (route: string) => {
    const response = await ((await fetch(`https://api.divar.ir/v8/web-search${route}`)).json())
    setData(response)
  }

  // useEffect( () => {
  //   sessionStorage.setItem("routes", JSON.stringify(routes))
  // }, [routes])
  
  return <DivarContext.Provider value={{data, getSetData, routes: {topLevel: "", level2: "", level3: ""} }}>{children}</DivarContext.Provider>
}

export default DivarContextProvider
