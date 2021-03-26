
export interface AllQueriesType {
  searchQuery: string | null;
}

const urlHandle = (
  baseUrl: string, 
  pathname: string,
  city: string,
  ) => {

  let completeURL: string = baseUrl
  pathname = pathname === "/" ? `/${city}` : pathname
  completeURL += pathname

  return completeURL
}

export default urlHandle;