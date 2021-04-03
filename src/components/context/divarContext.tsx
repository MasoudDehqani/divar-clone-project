import React, { createContext } from 'react'
import { useLocation, useRouteMatch } from "react-router-dom"
import usePathname from '../Hooks/usePathname'
import initialContextValues, {ContextType} from "./initialContextValues"

export const DivarContext = createContext<ContextType>(initialContextValues)

const DivarContextProvider = ({ children } : { children: React.ReactChild }) => {

  const { pathname } = useLocation()
  const city = localStorage.getItem("city")
  const match = useRouteMatch<{city: string}>("/:city")
  console.log(match?.params.city)
  if (!city && !!match?.params.city) localStorage.setItem("city", match?.params.city)
  console.log(city)

  const { data, status, routes, districts, completeURL } = usePathname(initialContextValues.baseUrl, pathname, city)
  console.log(completeURL)
  
  console.log(data)
  console.log(status);
  console.log(pathname)
  
  return <DivarContext.Provider value={{ data, status, city, routes, districts, baseUrl: initialContextValues.baseUrl, completeURL }}>{children}</DivarContext.Provider>
}

export default DivarContextProvider