import React from "react";
import { Switch, Route } from "react-router-dom";
import Error404 from "./Error404";
import Splash from "./Splash";
import SignedIn from "./SignedIn";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/home' component={SignedIn} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
