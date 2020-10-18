import React, { Component, useState } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Balance from "./components/balance.js";
import Deposit from "./components/deposit.js";
import Withdraw from "./components/withdraw.js";
import interfaceButtons from "./components/interfaceButtons.js";

import "./App.css";

function App() {
  const [interfaced, setInterfaced] = useState("");
  const componentDidMount = async () => {};
  const card = () => {
    return (
      <div className="card">
        <interfaceButtons
          changeinterface={() => changeinterface()}
          interfaced={interfaced}
        />
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
