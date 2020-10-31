import React from "react";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div style={{ margin: 0, fontFamily: "Open Sans" }}>
        <DummyNavbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
