# Sample Hardhat Project

This project is a simple sample to watch event from blockchain

## Environment
- blockchain: solidity
- watcher: nodejs

### Installation
```shell
npm i
```
### How to use
open three (3) shells
- shell 1: running local network
```shell
npm run node:hardhat
```
- shell 2: deploy contract after running local network
```shell
npm run deploy
```
take sample contract address on console and add to variable: /scripts/add.js SAMPLE_ADDRESS and /src/watcher contractAddress

```shell
npm run start
```
run this command to run watcher event
- shell 3: call function with event on smart contract
```shell
npm run add
```
call add function with event Add. After this done, check event catched on watcher (shell 2)