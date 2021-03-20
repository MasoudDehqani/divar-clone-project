import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import usePathname from '../Hooks/usePathname'

interface ContextType {
  data: any;
  routes: {topLevel: string; level2: string; level3: string};
  city: string;
  districts: string[]
}

let routes = {topLevel: "", level2: "", level3: ""}
let districts: string[] = []
let city = "tehran"

export const DivarContext = createContext<ContextType>({data: [], routes, city, districts })

const DivarContextProvider = ({ children } : { children: React.ReactChild }) => {

  const { pathname } = useLocation()
  console.log(pathname)

  const { data, routes, districts } = usePathname(pathname, city)

  console.log(data)
  
  return <DivarContext.Provider value={{ data, routes, city, districts }}>{children}</DivarContext.Provider>
}

export default DivarContextProvider


  // const [data, setData] = useState({})

  // console.log(data)

  // const getSetData = async (route = `/${city}`) => {
  //   if (route === "/") return
  //   const response = await ((await fetch(`https://api.divar.ir/v8/web-search${route}`)).json())
  //   const levels: string[] = []
  
  //   response.seo_details.bread_crumbs.forEach( ({url} : {url: string}) => {
  //     url.includes("/") && levels.unshift(url.substr(city.length + 1))
  //   })

  //   routes.topLevel = levels[0] ? levels[0] : "";
  //   routes.level2 = levels[1] ? levels[1] : "";
  //   routes.level3 = levels[2] ? levels[2] : "";
  //   districts = response.schema.json_schema.properties.districts.properties.vacancies.items.enumNames
  //   setData(response)
  // }
 
  // useEffect( () => {
  //   getSetData(pathname)
  // }, [pathname])