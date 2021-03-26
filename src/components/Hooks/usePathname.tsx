import { useCallback, useEffect, useMemo, useState } from "react"
import urlHandle from "../outsourcing/urlHandle"
import fetchHandle from "../outsourcing/fetchHandle"
import setRequiredData from "../outsourcing/setRequiredData"
import useQueries from "./useQueries"

const usePathname = (baseUrl: string, pathname: string, city: string) => {

  const [data, setData] = useState({})
  let [nextPageQuery, setNextPageQuery] = useState("")
  const queries = useQueries()
  const url = urlHandle(baseUrl, pathname, city)
  let completeURL = url + queries

  let routes = useMemo(() => ({topLevel: "", level2: "", level3: ""}), [])
  let districts: string[] = useMemo(() => [], [])
  
  const getSetData = useCallback(async () => {

    const response = await fetchHandle(completeURL)

    setRequiredData(response, routes, districts, response.seo_details.bread_crumbs[response.seo_details.bread_crumbs.length - 2].url)
    
    setData(response)
    

  }, [completeURL, routes, districts])
  
  useEffect( () => {
    getSetData()
  }, [getSetData, url])

  return { data, routes, districts, completeURL, nextPageQuery, setNextPageQuery }
}


export default usePathname;