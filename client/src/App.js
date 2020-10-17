import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Balance from "./components/balance.js";
import Deposit from "./components/deposit.js";
import Withdraw from "./components/withdraw.js";

import "./App.css";

class App extends Component {
  state = {
    interface: "Balance",
  };

  componentDidMount = async () => {};
  card = () => {
    return (
      <div className="card">
        <div className="cardheader">
          <div>
            <p>Stats</p>
          </div>
          <div>
            <p>Deposit</p>
          </div>
          <div>
            <p>Withdraw</p>
          </div>
        </div>
        <div>{this.whichInterface()}</div>
      </div>
    );
  };
  whichInterface = () => {
    switch (this.state.interface) {
      case "Balance":
        return <Balance />;
      case "Deposit":
        return <Deposit />;
      case "withdraw":
        return <Withdraw />;
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Poken</h1>
        {this.card()}
      </div>
    );
  }
}

export default App;
