import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Splash from './pages/Splash'
import Search from './pages/Search'
import Weight from './pages/Weight'
import Results from './pages/Results'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/splash" component={Splash} />        
        <Route exact path="/search" component={Search} />        
        <Route exact path="/weight" component={Weight} />        
        <Route exact path="/results" component={Results} />        
      </Switch>
    </BrowserRouter>

  );
}

export default App;
