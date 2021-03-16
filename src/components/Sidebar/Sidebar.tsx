import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import TopLevelSidebar from './TopLevelSidebar'
import Level2Sidebar from "./Level2Sidebar"


const Sidebar = () => {
  // console.log("Sidebar")
  return (
    <div style={{width: '400px', marginTop: "100px", position: "sticky", padding: "0 25px"}}>

        <h3>دسته بندی‌ها</h3>

        

        <Switch>
          <Route exact path="/tehran/:category" component={Level2Sidebar} />
          <Route exact path="/tehran" component={TopLevelSidebar} />
          <Route exact path="/" render={() => <Redirect to="/tehran" />} />
          {/* <Route path="/real-estate" component={Level2Sidebar} />
          <Route path="/vehicles" component={Level2Sidebar} />
          <Route path="/electronic-devices" component={Level2Sidebar} />
          <Route path="/home-and-kitchen" component={Level2Sidebar} />
          <Route path="/services" component={Level2Sidebar} />
          <Route path="/personal-goods" component={Level2Sidebar} />
          <Route path="/entertainment" component={Level2Sidebar} />
          <Route path="/social-services" component={Level2Sidebar} />
          <Route path="/businesses" component={Level2Sidebar} />
          <Route path="/jobs" component={Level2Sidebar} /> */}
        </Switch>
    </div>
  )
}

export default Sidebar
