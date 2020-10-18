import React, { useState } from "react";

export default function InterfaceButtons(props) {
  const whichButtonHighlighted = (buttonRepresents) => {
    if (buttonRepresents === props.interfaced) {
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
        onClick={() => props.setInterfaced("balance")}
      >
        <a>Stats</a>
      </div>
      <div
        className="button"
        id={whichButtonHighlighted("deposit")}
        onClick={() => props.setInterfaced("deposit")}
      >
        <a>Deposit</a>
      </div>
      <div
        className="button"
        id={whichButtonHighlighted("withdraw")}
        onClick={() => props.setInterfaced("withdraw")}
      >
        <a>Withdraw</a>
      </div>
    </div>
  );
}
