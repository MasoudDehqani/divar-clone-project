
const fetchHandle = async (url: string, route: string, city: string, query: string | null) => {
  if (route === "/") route = `/${city}`

  console.log(`${url}${route}${query ? `?q=${query}` : ""}`)

  try {
    const responsePromise = (await fetch(`${url}${route}${query ? `?q=${query}` : ""}`)).json().catch(() => console.log("wrong url"))
    return responsePromise
  } catch(err) {
    console.log(err)
    throw new Error("network connectivity problem")
  }
}

export default fetchHandle;