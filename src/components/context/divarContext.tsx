import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"

interface ContextType {
  data: any;
  getSetData: Function;
  routes: {topLevel: string; level2: string; level3: string};
  city: string;
  districts: string[]
  // url: string
  // setUrl: React.Dispatch<React.SetStateAction<string>>
}

let routes = {topLevel: "", level2: "", level3: ""}
let districts: string[] = []
let city = "tehran"

export const DivarContext = createContext<ContextType>({data: [], getSetData: () => {}, routes, city, districts })

const DivarContextProvider = ({ children } : { children: React.ReactChild }) => {

  // const match = useRouteMatch()
  // const history = useHistory()
  const { pathname } = useLocation()
  console.log(pathname)

  const [data, setData] = useState({})
  // const [url, setUrl] = useState("/tehran")
  // const [routes, setRoutes] = useState({topLevel: "", level2: "", level3: ""})

  console.log(data)

  const getSetData = async (route = `/${city}`) => {
    if (route === "/") return
    const response = await ((await fetch(`https://api.divar.ir/v8/web-search${route}`)).json())
    const levels: string[] = []
  
    response.seo_details.bread_crumbs.forEach( ({url} : {url: string}) => {
      url.includes("/") && levels.unshift(url.substr(city.length + 1))
    })
    // setRoutes({topLevel: levels[0] ? levels[0] : "", level2: levels[1] ? levels[1] : "", level3: levels[2] ? levels[2] : ""})
    routes.topLevel = levels[0] ? levels[0] : "";
    routes.level2 = levels[1] ? levels[1] : "";
    routes.level3 = levels[2] ? levels[2] : "";
    districts = response.schema.json_schema.properties.districts.properties.vacancies.items.enumNames
    setData(response)
  }
 
  useEffect( () => {
    getSetData(pathname)
  }, [pathname])
  
  return <DivarContext.Provider value={{ data, getSetData, routes, city, districts }}>{children}</DivarContext.Provider>
}

export default DivarContextProvider