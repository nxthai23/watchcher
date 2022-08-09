const Web3 = require('web3')
const fs = require('fs')

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
const abi = JSON.parse(fs.readFileSync('./artifacts/contracts/Sample.sol/Sample.json', 'utf-8')).abi
const eventName = 'Add'

const web3 = new Web3(new Web3.providers.WebsocketProvider('http://127.0.0.1:8545'));  // connect hardhat rpc local using web3

const SampleContract = new web3.eth.Contract(abi, contractAddress)

SampleContract.events.Add(err => console.log(err))
  .on('data', (data) => {
  console.log('Event emit: ', data.event)
  console.log('Value: ', data.returnValues)
})
  .on('error', err => {
    console.log('Error: ', err)
  })
  .on('connected', con => {
    console.log('connected: ', con)
  })