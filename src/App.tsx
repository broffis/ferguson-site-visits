import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <div>
        <p>Click the links </p>
        <div className="app-links">
          <Link className="link" to={"/visit-form"}>
            Visit Form
          </Link>
          <Link className="link" to={"/visit-map"}>
            Map
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
