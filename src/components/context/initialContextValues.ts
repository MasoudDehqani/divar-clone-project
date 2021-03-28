export interface ContextType {
  data: any;
  routes: {topLevel: string; level2: string; level3: string};
  city: string | null;
  districts: string[];
  baseUrl: string;
  completeURL: string;
  status: boolean;
}

let initialContextValues = {
  data: [],
  routes: {topLevel: "", level2: "", level3: ""},
  districts: [],
  city : "",
  baseUrl : "https://api.divar.ir/v8/web-search",
  completeURL : "",
  status: false,
}

export default initialContextValues