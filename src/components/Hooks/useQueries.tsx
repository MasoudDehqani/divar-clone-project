import useQuery from "./useQuery"

const useQueries = () => {

  const query = useQuery()
  let queries:string = "" 
  
  let searchQuery = query.get("q")
  queries += !searchQuery ? "" : `?q=${searchQuery}`

  return queries
}

export default useQueries;