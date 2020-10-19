var Lottery = artifacts.require("./Lottery.sol");
var SafeMath = artifacts.require("./SafeMath.sol");
var Token = artifacts.require("./Token.sol");

module.exports = function (deployer) {
  deployer.deploy(Lottery, SafeMath, Token);
};
