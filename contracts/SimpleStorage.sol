// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
    string changeAbleText;
    address public changedBy;

    constructor(string memory input) public {
        changeAbleText = "Change this word";
        changedBy = msg.sender;
    }

    // SET AND GET to interact with the changeable text
    function set(string memory input) public {
        changeAbleText = input;
        changedBy = msg.sender;
    }

    function get() public view returns (string memory) {
        return changeAbleText;
    }

    function getWhoLastChangedTheWord() public view returns (address) {
        return changedBy;
    }
}
