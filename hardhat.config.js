require("@nomiclabs/hardhat-waffle");

module.exports = {

  networks: {

    hardhat: {
      port: "8545",
      chainId: 1337
    },

    // mumbai: {
    //   url: "",
    //   accounts: []
    // },

    // polygon: {
    //   url: "",
    //   accounts: []
    // }


  },

  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  paths: {
    sources: "./web3/contracts",
    tests: "./web3/test",
    cache: "./web3/cache",
    artifacts: "./web3/artifacts"
  },

  mocha: {
    timeout: 40000
  }

};
