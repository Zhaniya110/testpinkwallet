const tBNB = {
    hex: '0x61', // Replace with the actual hex value for tBNB
    name: 'tBNB',
    rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/', // Provide the RPC URL for tBNB
    ticker: 'tBNB',
  };
  
  const Ethereum = {
    hex: '0x1',
    name: 'Ethereum',
    rpcUrl: '',
    ticker: 'ETH',
  };
  
  const MumbaiTestnet = {
    hex: '0x13881',
    name: 'Mumbai Testnet',
    rpcUrl: 'https://polygon-mumbai-pokt.nodies.app ',
    ticker: 'MATIC',
  };
  
  export const CHAINS_CONFIG = {
    '0x1': Ethereum,
    '0x13881': MumbaiTestnet,
    '0x61': tBNB,
  };
  