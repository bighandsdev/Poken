// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
    string changeAbleText;
    address public changedBuy;

    constructor(string memory input) public {
        changeAbleText = "Change this word";
        changedBuy = msg.sender;
    }

    // SET AND GET to interact with the changeable text
    function set(string memory input) public {
        changeAbleText = input;
        changedBuy = msg.sender;
    }

    function get() public view returns (string memory) {
        return changeAbleText;
    }

    //GET to change who interacted with the text last

    function getChangedBuy() public view returns (address) {
        return changedBuy;
    }
}
