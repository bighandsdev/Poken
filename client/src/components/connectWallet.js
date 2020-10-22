import React, { useState } from "react";
import "./connectWallet.css";

export default function ConnectWallet(props) {
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("");

  function readableAddress(address) {
    var addressChunks = [];

    for (var i = 0; i < address.length; i += 5) {
      addressChunks.push(address.substring(i, i + 5));
    }
    return `${addressChunks[0]}....${addressChunks[addressChunks.length - 1]}`;
  }

  if (props.addr) {
    return (
      <div id="connectbutton" className="button" onClick={props.getAccount}>
        <p>{readableAddress(address)}</p>
      </div>
    );
  }

  if (!props.addr) {
    return (
      <div id="connectbutton" className="button" onClick={props.getAccount}>
        <p>Connect</p>
      </div>
    );
  }
}
