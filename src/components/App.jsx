import React from "react";
import { Switch, Route } from "react-router-dom";
import Error404 from "./Error404";
import Splash from "./Splash";
import SignedIn from "./SignedIn";
import Privacy from "./Privacy";
import TermsOfService from "./TermsOfService";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/home' component={SignedIn} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/terms' component={TermsOfService} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
