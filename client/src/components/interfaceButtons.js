import React from "react";

export default function interfaceButtons() {
  const whichButtonHighlighted = (buttonRepresents) => {
    if (buttonRepresents === interfaced) {
      return "on";
    } else {
      return "off";
    }
  };
  return (
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
  );
}
