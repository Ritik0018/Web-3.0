require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/D5c-2pAozRgsP46r4nR6nN4Mf339pcz9',
      accounts: ['95f7237e720188b82821ab0316ab476597c342551b505a9c7f870f6511ca2c4c'],
    },
  },
};