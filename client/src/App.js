import React, { Component, useState } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Balance from "./components/balance.js";
import Deposit from "./components/deposit.js";
import Withdraw from "./components/withdraw.js";
import InterfaceButtons from "./components/interfaceButtons.js";
import ConnectWallet from "./components/connectWallet.js";

import "./App.css";

function App() {
  const [interfaced, setInterfaced] = useState("balance");
  const [addr, setAddr] = useState("");
  const [balance, setBalance] = useState("");
  const [web3, setWeb3] = useState("");
  const [contract, setContract] = useState("");
  const [network, setNetwork] = useState("");

  const componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();

      //const deployedNetwork = SimpleStorageContract.networks[networkId];
      //const instance = new web3.eth.Contract(
      //  SimpleStorageContract.abi,
      //  deployedNetwork && deployedNetwork.address
      //);
      setWeb3(web3);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };
  const card = () => {
    if (window.ethereum) {
      return (
        <div className="card">
          <InterfaceButtons
            setInterfaced={setInterfaced}
            interfaced={interfaced}
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
  };

  async function getAccount() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    setAddr(account);
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
      <ConnectWallet
        getAccount={() => getAccount()}
        addr={addr}
        balance={balance}
      />

      <div id="logo">
        <h1 className="titletext" id="statement">
          Poken
        </h1>
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
