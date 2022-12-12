require('@nomicfoundation/hardhat-toolbox');
const dotenv = require('dotenv');

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: process.env.REACT_APP_GOERLI_RPC_URL,
      accounts: [process.env.REACT_APP_GOERLI_PRIVATE_KEY],
    },
  },
  ehterscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY,
  },
};
