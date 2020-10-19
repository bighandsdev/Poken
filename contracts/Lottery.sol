pragma solidity ^0.5.0;

import "./Token.sol";
import "./DaiToken.sol";
import "./Compound.sol";

contract Lottery {
    string public name = "Poken Lottery";
    uint256 public whichSession;
    address public owner;
    Poken public poken;
    DaiToken public daiToken;
    Comp public compound;

    address[] public stakers;
    mapping(address => uint256) public stakingBalance;
    mapping(address => uint256) public session;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;

    constructor(Poken _dappToken, DaiToken _daiToken) public {
        dappToken = _dappToken;
        daiToken = _daiToken;
        whichSession = 1;
        owner = msg.sender;
    }

    function deposit(uint256 _amount) public {
        // Require amount greater than 0
        require(_amount > 0, "amount cannot be 0");

        // Trasnfer Mock Dai tokens to this contract for staking
        daiToken.transferFrom(msg.sender, address(this), _amount);

        // Update staking balance
        stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;

        // assign session
        session[msg.sender] = whichSession;

        // Add user to stakers array *only* if they haven't staked already
        if (!hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        }

        // Update staking status
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }

    // Unstaking Tokens (Withdraw)
    function withdraw() public {
        // Fetch staking balance
        uint256 balance = stakingBalance[msg.sender];

        // Require amount greater than 0
        require(balance > 0, "staking balance cannot be 0");
        // checks if they are currently in the session
        if (session[msg.sender] == !whichSession) {
            // Transfer Mock Dai tokens to this contract for staking
            daiToken.transfer(msg.sender, balance);

            // Reset staking balance
            stakingBalance[msg.sender] = 0;

            // Update staking status
            isStaking[msg.sender] = false;
        }
    }

    // Issuing Tokens
    function issueTokens() public {
        // Only owner can call this function
        require(msg.sender == owner, "caller must be the owner");

        // Issue tokens to all stakers
        for (uint256 i = 0; i < stakers.length; i++) {
            address recipient = stakers[i];
            uint256 balance = stakingBalance[recipient];
            if (balance > 0) {
                poken.transfer(recipient, balance);
            };
        }
    }

    function engageSessionA() public {
        require(msg.sender == owner, "caller must be the owner");

        uint256 totalAmount = 0;

        for (uint256 i = 0; i < stakers.length; i++) {
            address recipient = stakers[i];
            uint256 userBalance = stakingBalance[recipient];
            if (balance > 0) {
                totalAmount = totalAmount + balance
            };
        }
        compound.mint(totalAmount);
    }

    function engageSessionB() public {
        require(msg.sender == owner, "caller must be the owner");

        uint256 totalAmount = 0;

        for (uint256 i = 0; i < stakers.length; i++) {
            address recipient = stakers[i];
            uint256 userBalance = stakingBalance[recipient];
            if (balance > 0) {
                totalAmount = totalAmount + balance
            }
        }
        compound.mint(totalAmount);
    }

    function disengageSessionA() public {
        require(msg.sender == owner, "caller must be the owner");
        
    }

    function disengageSessionB() public {
        require(msg.sender == owner, "caller must be the owner");
    }
}
