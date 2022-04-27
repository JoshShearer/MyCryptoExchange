// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract Token {
    string public name = "MTB Token";
    string public symbol = "MTB";
    uint256 public decimals = 18;
    uint256 public totalSupply; 

    constructor() public {
        totalSupply = 100000 *(10 ** decimals);
    }
}