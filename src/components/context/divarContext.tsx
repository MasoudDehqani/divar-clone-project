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
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>
}

export const DivarContext = createContext<ContextType>({data: [], getSetData: () => {}, routes: {topLevel: "", level2: "", level3: ""}, url: "", setUrl: () => {}})

const DivarContextProvider = ({ children } : { children: React.ReactChild }) => {

  const [data, setData] = useState([])
  const [url, setUrl] = useState("/tehran")
  const [routes, setRoutes] = useState({topLevel: "", level2: "", level3: ""})
  // const [routes, setRoutes] = useState({})

  // let url = ""
  // let routes = {topLevel: "", level2: "", level3: ""}
  // console.log(routes)

  const getSetData = async (route: string) => {
    const response = await ((await fetch(`https://api.divar.ir/v8/web-search${route}`)).json())
    const levels: string[] = []
  
    response.seo_details.bread_crumbs.forEach( (item: any) => {
      item.url.includes("/") && levels.unshift(item.url.substr(7))
    })
    setRoutes({topLevel: levels[0] ? levels[0] : "", level2: levels[1] ? levels[1] : "", level3: levels[2] ? levels[2] : ""})
    // routes.topLevel = levels[0] ? levels[0] : "";
    // routes.level2 = levels[1] ? levels[1] : "";
    // routes.level3 = levels[2] ? levels[2] : "";
    // console.log(routes)
    setData(response)
  }

  useEffect( () => {
    getSetData(url)
  }, [url])
  
  return <DivarContext.Provider value={{data, getSetData, routes, url, setUrl }}>{children}</DivarContext.Provider>
}

export default DivarContextProvider
