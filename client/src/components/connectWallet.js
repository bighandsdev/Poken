import React from "react";

function connectWallet(props) {
  const [walletConnected, setWalletConnected] = useState("false");
  const [address, setAddress] = useState("");

  function readableAddress(address) {
    var addressChunks = [];

    for (var i = 0; i < address.length; i += 5) {
      addressChunks.push(address.substring(i, i + 5));
    }
    return `${addressChunks[0]}....${addressChunks[addressChunks.length - 1]}`;
  }

  if (walletConnected) {
    return (
      <div className="button">
        <p>{readableAddress(address)}</p>
      </div>
    );
  }

  if (!walletConnected) {
    return (
      <div className="button">
        <p>Connect</p>
      </div>
    );
  }
}
