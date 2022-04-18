//https://eth-ropsten.alchemyapi.io/v2/enOtNNRNgT5xyfKlPg2vFsOIEh-vrocy

require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/enOtNNRNgT5xyfKlPg2vFsOIEh-vrocy',
      accounts:['927627d7a1276dfdbfa3add9919aea925f8c169d0692b51a049371aecdb50714']
    }
  }
}