import React from "react";
import { Switch, Route } from "react-router-dom";
import Error404 from "./App/Error404";
import Splash from "./App/Splash";
import UserPage from "./App/UserPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/user-page' component={UserPage} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
