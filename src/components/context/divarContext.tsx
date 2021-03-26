import React, { createContext, useState } from 'react'
import { useLocation, useParams } from "react-router-dom"
import usePathname from '../Hooks/usePathname'
import { ContextType, baseUrl, districts, routes, completeURL } from "./initialContextValues"


export const DivarContext = createContext<ContextType>({data: [], routes, districts, baseUrl, completeURL })

const DivarContextProvider = ({ children } : { children: React.ReactChild }) => {

  const { pathname } = useLocation()
  console.log(pathname)
  //@ts-ignore
  const {city} = useParams()
  console.log(city);
    
  const { data, routes, districts, completeURL } = usePathname(baseUrl, pathname, city)
  console.log(routes)
  
  console.log(data)

  return <DivarContext.Provider value={{ data, routes, districts, baseUrl, completeURL }}>{children}</DivarContext.Provider>
}

export default DivarContextProvider