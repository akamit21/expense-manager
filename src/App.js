import React from "react";
import Menubar from "./component/layout/Menubar";
import Routes from "./Routes";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Menubar />
        <Routes />
      </>
    );
  }
}

export default App;
