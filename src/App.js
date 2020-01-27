import React from "react";
import Menubar from "./component/layout/Menubar";
import AppRoute from "./routers/AppRoute";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Menubar />
        <AppRoute />
      </>
    );
  }
}

export default App;
