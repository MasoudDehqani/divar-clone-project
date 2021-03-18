
const fetchHandle = async (url: string, route: string, city: string) => {
  if (route === "/") route = `/${city}`

  try {
    const responsePromise = (await fetch(`${url}${route}`)).json().catch(() => console.log("wrong url"))
    return responsePromise
  } catch(err) {
    console.log(err)
    throw new Error("network connectivity problem")
  }
}

export default fetchHandle;