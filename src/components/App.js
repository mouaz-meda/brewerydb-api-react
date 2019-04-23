import React, { Fragment } from "react";
import Router from "./Router";

// Styles
import "@fortawesome/fontawesome-free/css/all.css";
import "../sass/App.scss";

class App extends React.Component {
  render() {
    return <Router />;
  }
}

export default App;
