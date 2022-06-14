require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic  = process.env.MNEMONIC;
const infuraToken = process.env.INFURA_TOKEN;

module.exports = {
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraToken}`);
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
      timeoutBlocks: 200
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.14",
    }
  }
};
