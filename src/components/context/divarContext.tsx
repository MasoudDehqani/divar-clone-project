import React, { createContext } from 'react'
import { useLocation } from "react-router-dom"
import usePathname from '../Hooks/usePathname'
import { ContextType, baseUrl, city, districts, routes, completeURL } from "./initialContextValues"


export const DivarContext = createContext<ContextType>({data: [], routes, city, districts, baseUrl, completeURL })

const DivarContextProvider = ({ children } : { children: React.ReactChild }) => {

  const { pathname } = useLocation()
    
  const { data, routes, districts, completeURL } = usePathname(baseUrl, pathname, city)
  
  console.log(data)

  return <DivarContext.Provider value={{ data, routes, city, districts, baseUrl, completeURL }}>{children}</DivarContext.Provider>
}

export default DivarContextProvider