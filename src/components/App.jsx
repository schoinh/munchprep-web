import React from "react";
import { Switch, Route } from "react-router-dom";
import Error404 from "./Error404";
import Splash from "./Splash";
import UserPage from "./UserPage";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/user-page' component={UserPage} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
