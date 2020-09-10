// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
    string storedData;

    constructor(string memory input) public {
        storedData = input;
    }

    function set(string memory input) public {
        storedData = input;
    }

    function get() public view returns (string memory) {
        return storedData;
    }
}
