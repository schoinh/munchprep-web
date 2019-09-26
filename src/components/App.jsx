import React from "react";
import { Switch, Route } from "react-router-dom";
import Error404 from "./app/Error404";
import Splash from "./app/Splash";
import UserPage from "./app/UserPage";

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
