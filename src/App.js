import React from "react";
import "./App.css";
import HomePage from "./pages/homepage.component";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </switch>
    </div>
  );
}
const HatsPage = () => {
  return <h1>hats page</h1>;
};

export default App;
