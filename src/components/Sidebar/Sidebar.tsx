import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import TopLevelSidebar from './TopLevelSidebar'

const Sidebar = () => {
  
  return (
    <div style={{width: '400px', marginTop: "100px", position: "sticky", padding: "0 25px"}}>

        <h3>دسته بندی‌ها</h3>

        

        <Switch>
          <Route exact path="/tehran/:category/:district" component={TopLevelSidebar} />
          <Route exact path="/tehran/:category" component={TopLevelSidebar} />
          <Route exact path="/tehran" component={TopLevelSidebar} />
          <Route exact path="/" render={() => <Redirect to="/tehran" />} />
        </Switch>
    </div>
  )
}

export default Sidebar
