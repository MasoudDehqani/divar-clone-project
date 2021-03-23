
const fetchHandle = async (apiUrl: string, route: string, city: string, searchQuery: string | null) => {
  if (route === "/") route = `/${city}`

  console.log(`${apiUrl}${route}${searchQuery ? `?q=${searchQuery}` : ""}`)

  try {
    const responsePromise = (await fetch(`${apiUrl}${route}${searchQuery ? `?q=${searchQuery}` : ""}`)).json().catch(() => console.log("wrong url"))
    return responsePromise
  } catch(err) {
    console.log(err)
    throw new Error("network connectivity problem")
  }
}

export default fetchHandle;