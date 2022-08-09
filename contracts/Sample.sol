pragma solidity ^0.8.2;

contract Sample {
    uint256 a = 0;
    event Add(uint256 a);
    constructor(){}

    function add() public returns(uint256){
        a += 1;
        emit Add(a);
        return a;
    }
}