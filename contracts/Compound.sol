pragma solidity ^0.7.0;

interface Comp {
    function mint(uint256 mintAmount) external returns (uint256);

    function redeemUnderlying(uint256 redeemAmount) external returns (uint256);

    function balanceOfUnderlying(address owner) external returns (uint256);

    function getCash() external view returns (uint256);

    function supplyRatePerBlock() external view returns (uint256);
}
