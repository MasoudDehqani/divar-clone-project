export interface ContextType {
  data: any;
  routes: {topLevel: string; level2: string; level3: string};
  city: string;
  districts: string[];
  baseUrl: string;
  completeURL: string;
}

export let routes = {topLevel: "", level2: "", level3: ""}
export let districts: string[] = []
export let city = "tehran"
export const baseUrl = "https://api.divar.ir/v8/web-search"
export let completeURL = ""
export let nextPageQuery = ""
export let setNextPageQuery = () => {}