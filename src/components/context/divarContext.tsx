import React, { createContext, useContext, useReducer } from 'react'
import { contextType } from 'react-infinite-scroller'
import { useLocation, useRouteMatch } from "react-router-dom"
import usePathname from '../Hooks/usePathname'
import initialContextValues, {ContextType} from "./initialContextValues"
import UrlReducer from './UrlReducer'

export const DivarContext = createContext<ContextType>(initialContextValues)

const DivarContextProvider = ({ children } : { children: React.ReactChild }) => {

  const [URL, dispatch] = useReducer(UrlReducer, "")

  const { pathname } = useLocation()
  const city = localStorage.getItem("city")
  const match = useRouteMatch<{city: string}>("/:city")
  if (!city && !!match?.params.city) localStorage.setItem("city", match?.params.city)

  const { data, setData, status, routes, districts, completeURL } = usePathname(initialContextValues.baseUrl, pathname, city)
  
  console.log(data);
  
  return <DivarContext.Provider value={{ data, setData, status, city, routes, districts, baseUrl: initialContextValues.baseUrl, completeURL }}>{children}</DivarContext.Provider>
}

export const useDivarContext = () => useContext(DivarContext)

export default DivarContextProvider