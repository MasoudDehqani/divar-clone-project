import React, { createContext } from 'react'
import { useLocation } from "react-router-dom"
import usePathname from '../Hooks/usePathname'
import initialContextValues, {ContextType} from "./initialContextValues"

export const DivarContext = createContext<ContextType>(initialContextValues)

const DivarContextProvider = ({ children } : { children: React.ReactChild }) => {

  const { pathname } = useLocation()
    
  const { data, status, routes, districts, completeURL } = usePathname(initialContextValues.baseUrl, pathname, pathname.substr(0, pathname.indexOf("/")))
  
  console.log(data)
  console.log(status);
  
  return <DivarContext.Provider value={{ data, status, routes, districts, baseUrl: initialContextValues.baseUrl, completeURL }}>{children}</DivarContext.Provider>
}

export default DivarContextProvider