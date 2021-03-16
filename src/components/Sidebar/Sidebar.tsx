import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, useRouteMatch } from "react-router-dom"
import TopLevelSidebar from './TopLevelSidebar'
import Level2Sidebar from "./Level2Sidebar"


const Sidebar = () => {
  return (
    <div style={{width: '400px', marginTop: "100px", position: "sticky", padding: "0 25px"}}>
      <Router>

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
      </Router>
    </div>
  )
}

export default Sidebar
