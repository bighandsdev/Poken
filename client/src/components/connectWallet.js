import React, { useState } from "react";
import "./connectWallet.css";

export default function ConnectWallet(props) {
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("");

  function readableAddress(address) {
    var addressChunks = [];
    var addressWithout0x = address.replace("0x", "");

    for (var i = 0; i < addressWithout0x.length; i += 4) {
      addressChunks.push(addressWithout0x.substring(i, i + 4));
    }
    return `0x${addressChunks[0]}....${
      addressChunks[addressChunks.length - 1]
    }`;
  }

  if (props.addr) {
    return (
      <div id="connectbutton" className="button" onClick={props.getAccount}>
        <p>{readableAddress(props.addr)}</p>
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
