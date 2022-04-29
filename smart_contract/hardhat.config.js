// https://eth-ropsten.alchemyapi.io/v2/adkQA24COxiFFQPlhtbV6G7au1KO7_X6

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/adkQA24COxiFFQPlhtbV6G7au1KO7_X6',
      accounts:['ea873f46dc287c795316e819fe38f1e0b7a99b7d400b68e080c23a3396954989']
    }
  }
}