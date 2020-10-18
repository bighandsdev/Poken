import React from "react";

export default class Withdraw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="input">
          <p id="inputText">Withdraw Ether</p>
          <input placeholder="Amount"></input>
        </div>
        <div className="button" id="withdraw">
          <a>Withdraw</a>
        </div>
      </div>
    );
  }
}
