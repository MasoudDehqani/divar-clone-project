import { useCallback, useEffect, useMemo, useState } from "react"
import fetchHandle from "../outsourcing/fetchHandle"
import setRequiredData from "../outsourcing/setRequiredData"

const usePathname = (pathname: string, city: string) => {

  const [data, setData] = useState({})

  let routes = useMemo(() => ({topLevel: "", level2: "", level3: ""}), [])
  let districts: string[] = useMemo(() => [], [])
  
  const getSetData = useCallback(async (route = `/${city}`) => {

    const response = await fetchHandle("https://api.divar.ir/v8/web-search", pathname, city)

    setRequiredData(response, routes, districts, city)
    setData(response)

  }, [city, districts, pathname, routes])
  
  useEffect( () => {
    getSetData(pathname)
  }, [getSetData, pathname])

  return { data, routes, districts }
}


export default usePathname;