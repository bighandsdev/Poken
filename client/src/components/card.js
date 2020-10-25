import React from "react";
import Balance from "./balance.js";
import Deposit from "./deposit.js";
import Withdraw from "./withdraw.js";
import InterfaceButtons from "./interfaceButtons.js";

export default function Card(props) {
  const whichInterface = () => {
    var result = null;
    switch (props.interfaced) {
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
  if (window.ethereum) {
    return (
      <div className="card">
        <InterfaceButtons
          setInterfaced={props.setInterfaced}
          interfaced={props.interfaced}
        />
        <div>{whichInterface()}</div>
      </div>
    );
  } else {
    return (
      <div className="buttondesign" onClick="">
        <p>Install Web3 provider</p>
      </div>
    );
  }
}
