import React from "react";

export default class Withdraw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="inputbox">
          <p id="inputText">Withdraw Ether</p>
          <input placeholder="Amount"></input>
        </div>
        <div className="eventbutton" id="withdraw">
          <div className="buttondesign">
            <a>Withdraw</a>
          </div>
        </div>
      </div>
    );
  }
}
