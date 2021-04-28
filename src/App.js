import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect push to={"/landing.html"} />
      </Route>
    </Router>
  );
}
