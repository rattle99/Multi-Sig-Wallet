require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider")
const infuraKey = process.env.INFURA;
const mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777 
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3, 
      gas: 5500000, 
      confirmations: 2, 
      timeoutBlocks: 200, 
      skipDryRun: true, 
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4, 
      gas: 5500000, 
      confirmations: 2, 
      timeoutBlocks: 200, 
      skipDryRun: true, 
    },
  },
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions : { 
      currency: 'USD',
      excludeContracts: ['Migrations'] 
    }
  },
  contracts_directory: './contracts',
  contracts_build_directory: './build/contracts',
  compilers: {
    solc: {
      version: "0.6.10",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1000
        }
      }
    }
  },
  plugins: ['solidity-coverage'],
}
