// https://eth-goerli.g.alchemy.com/v2/6TLF7dO82U1uevZp6-00o9gkq_42Yjj7
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/6TLF7dO82U1uevZp6-00o9gkq_42Yjj7',
      accounts: ['625fdb8e0d39896861751362edf628cd1de65f16fdb3d194b7baf278701e73c2'],
    },
  },
};