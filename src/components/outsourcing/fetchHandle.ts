
const fetchHandle = async (completeURL: string) => {

  try {
    const responsePromise = (await fetch(completeURL)).json().catch(() => console.log("wrong url"))
    return responsePromise
  } catch(err) {
    console.log(err)
    throw new Error("network connectivity problem")
  }
}

export default fetchHandle;