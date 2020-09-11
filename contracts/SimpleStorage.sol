// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
    string changeAbleText;
    address public owner;

    constructor(string memory input, address _owner) public {
        changeAbleText = input;
        owner = _owner;
    }

    function withdraw() public {
        require(msg.sender == owner, "NOT THE OWNER!");
        msg.sender.transfer((address(this)).balance);
    }

    function set(string memory input) public {
        changeAbleText = input;
    }

    function get() public view returns (string memory) {
        return changeAbleText;
    }

    function whoOwnsThisContract() public view returns (address) {
        return owner;
    }
}
