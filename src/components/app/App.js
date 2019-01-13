import React, { Component } from "react";

import "./App.css";
import FilteredList from "../../containers/FilteredList";
import Sidebar from "../Sidebar/Sidebar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="header">
            <h2>Tickets App</h2>
            <a href="https://github.com/ZackFox/tickets-job-task">Repository</a>
          </header>
          <div className="flex-container">
            <Sidebar />
            <FilteredList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
