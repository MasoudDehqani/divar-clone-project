import React, { useContext } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import { DivarContext } from '../context/divarContext'
import TopLevelSidebar from './TopLevelSidebar'

const Sidebar = () => {
  
  return (
    <div style={{width: '300px', height: "fit-content", marginTop: "100px", position: "sticky", padding: "0 25px"}}>

        <h3>دسته بندی‌ها</h3>

        

        <Switch>
          {/* <Route exact path="/tehran/:category/:district" component={TopLevelSidebar} /> */}
          <Route exact path="/:city/:category" component={TopLevelSidebar} />
          <Route exact path="/:city" component={TopLevelSidebar} />
          <Route exact path="/" render={() => <Redirect to="/tehran" />} />
        </Switch>
    </div>
  )
}

export default Sidebar
