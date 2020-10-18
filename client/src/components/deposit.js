import React from "react";

export default class Deposit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="input">
          <p id="inputText">Deposit Ether</p>
          <input placeholder="Amount"></input>
        </div>
        <div className="button" id="deposit">
          <a>Deposit</a>
        </div>
      </div>
    );
  }
}
