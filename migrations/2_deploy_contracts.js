var Stake = artifacts.require("./Stake.sol");
var SafeMath = artifacts.require("./SafeMath.sol");
var Token = artifacts.require("./Token.sol");

module.exports = function (deployer) {
  deployer.deploy(Stake, SafeMath, Token);
};
