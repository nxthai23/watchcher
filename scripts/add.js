const { ethers } = require('hardhat');

const SAMPLE_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

let getSampleContract = async () => {
    let sample = await ethers.getContractFactory('Sample');
    return sample.attach(SAMPLE_ADDRESS);
}

async function main(){
    const [deployer] = await ethers.getSigners(); // get all user on local network
    const sample = await getSampleContract();
    const value = await sample.add();
    return value
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

