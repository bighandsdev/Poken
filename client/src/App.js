import React, { Component, useState } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import ConnectWallet from "./components/connectWallet.js";
import Card from "./components/card.js";

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
      setWeb3(web3);
      const networkId = await web3.eth.net.getId();
      setNetwork(networkId);
      const deployedNetwork = SimpleStorageContract.networks[networkId];

      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address
      );
      setContract(instance);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };
  componentDidMount();

  async function getAccount() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    setAddr(account);
  }

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
      <Card interfaced={interfaced} setInterfaced={setInterfaced} />
    </div>
  );
}

export default App;
