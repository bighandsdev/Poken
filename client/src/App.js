import React, { Component, useState } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Balance from "./components/balance.js";
import Deposit from "./components/deposit.js";
import Withdraw from "./components/withdraw.js";

import "./App.css";

function App() {
  const [interfaced, setInterfaced] = useState("");
  const componentDidMount = async () => {};
  const card = () => {
    return (
      <div className="card">
        <div id="cardheader">
          <div
            className="button"
            id={whichButtonHighlighted("balance")}
            onClick={() => changeinterface("balance")}
          >
            <a>Stats</a>
          </div>
          <div
            className="button"
            id={whichButtonHighlighted("deposit")}
            onClick={() => changeinterface("deposit")}
          >
            <a>Deposit</a>
          </div>
          <div
            className="button"
            id={whichButtonHighlighted("withdraw")}
            onClick={() => changeinterface("withdraw")}
          >
            <a>Withdraw</a>
          </div>
        </div>
        <div>{whichInterface()}</div>
      </div>
    );
  };

  function changeinterface(newInterface) {
    setInterfaced(newInterface);
  }
  const whichInterface = () => {
    var result = null;
    switch (interfaced) {
      case "balance":
        result = <Balance />;
        break;
      case "deposit":
        result = <Deposit />;
        break;
      case "withdraw":
        result = <Withdraw />;
        break;
      default:
        result = <Balance />;
    }

    return result;
  };
  const whichButtonHighlighted = (buttonRepresents) => {
    if (buttonRepresents === interfaced) {
      return "on";
    } else {
      return "off";
    }
  };

  return (
    <div className="App">
      <h1 className="titletext">Poken</h1>
      <div>
        <p className="titletext" id="statement1">
          Ether no loss
        </p>
        &nbsp;
        <p className="titletext" id="statement2">
          lottery
        </p>
      </div>
      {card()}
    </div>
  );
}

export default App;
