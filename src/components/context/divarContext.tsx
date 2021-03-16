import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"

interface ContextType {
  data: never[];
  getSetData: Function;
  routes: {topLevel: string; level2: string; level3: string};
  // url: string
  // setUrl: React.Dispatch<React.SetStateAction<string>>
}

let routes = {topLevel: "", level2: "", level3: ""}

export const DivarContext = createContext<ContextType>({data: [], getSetData: () => {}, routes })

const DivarContextProvider = ({ children } : { children: React.ReactChild }) => {

  // const match = useRouteMatch()
  // const history = useHistory()
  const location = useLocation()

  const [data, setData] = useState([])
  // const [url, setUrl] = useState("/tehran")
  // const [routes, setRoutes] = useState({topLevel: "", level2: "", level3: ""})

  console.log(data)

  const getSetData = async (route = "/tehran") => {
    const response = await ((await fetch(`https://api.divar.ir/v8/web-search${route}`)).json())
    const levels: string[] = []
  
    response.seo_details.bread_crumbs.forEach( (item: any) => {
      item.url.includes("/") && levels.unshift(item.url.substr(7))
    })
    // setRoutes({topLevel: levels[0] ? levels[0] : "", level2: levels[1] ? levels[1] : "", level3: levels[2] ? levels[2] : ""})
    routes.topLevel = levels[0] ? levels[0] : "";
    routes.level2 = levels[1] ? levels[1] : "";
    routes.level3 = levels[2] ? levels[2] : "";
    setData(response)
  }

  useEffect( () => {
    getSetData(location.pathname)
  }, [location])
  
  return <DivarContext.Provider value={{data, getSetData, routes }}>{children}</DivarContext.Provider>
}

export default DivarContextProvider
