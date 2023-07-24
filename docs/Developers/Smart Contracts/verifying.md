---
sidebar_position: 2
---

# Verifying a Smart Contract

Verifying a smart contract increases transparency, and hence, trust. 

## Using the Lemon Explorer

### Steps to verify your deployed smart contract:

1. Click on Verify and publish
2. Choose Compiler Type (Single file is recommended)
3. Choose the compiler version (according to your contract)
4. Choose the open source license 
5. Click continue   

    If you chose 'Single file' as the Compiler type, you could use a library like "sol-merger" to flatten your contract. It generates a single file that encompasses all the imports. Ensure there is only a single line of '// SPDX-License-Identifier'. If there are multiple lines of this, remove them, leaving only the first one.
6. Choose Optimization Yes (if you deployed your contract using Hardhat) 
7. Paste the source code
8. If the contract has a constructor then you need to create the ABI code for the values passed to the constructor. Use https://abi.hashex.org/. Copy the result and paste it to the Argument (Constructor) section.
9. Tick the box to indicate that you are not a robot.
10. Verify and Publish

## Using Command Line & Script
You can authenticate your contracts using a Hardhat or Truffle command line. First, obtain a scan API Key from https://explorer.lemonchain.io/. If you don't have an account, register first, and then generate a scan API Key. Hover over your username and select 'API Keys'. You can then create an API Key.
You then need to store the API Key in .env file which is read by your configuration file, such as:
`API_KEY={your API Key}`

Your Hardhat configuration `hardhat.config.js` may look like:

Your Truffle configuration `truffle-config.js` may look like:
Below are two examples of command lines to authenticate your contract, one in Hardhat and the other in Truffle configuration.

`npx hardhat verify --contract contracts/YourContractFile.sol:YourContractName --constructor-args scripts/argument.js --network testnet {contract address}`

`truffle run verify YourContract@{contract address} --network testnet`

In the above examples, it's assumed that you provided some values to the constructor when you launched the contract.

- **Using the Hardhat command line:** When authenticating using the Hardhat command line, you need to specify the values in a Javascript file. In the example above, it's assumed that the file is under the scripts folder. Please refer to https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan.

- **Using the Truffle command line:** however, you don't need to specify any value that you passed to the contract's constructor. Truffle records these when you launch the contract.
