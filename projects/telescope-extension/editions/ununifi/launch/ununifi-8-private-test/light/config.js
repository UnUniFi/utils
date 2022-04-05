// Describe node as array
const nodes = ['a.private-test.ununifi.cauchye.net', 'b.private-test.ununifi.cauchye.net'];
// Get a random value from an array (ToDo. Select from nodes at the front)
const node = nodes[Math.floor(Math.random() * nodes.length)];

const config = {
  restURL: `${location.protocol}//${node}:1317`,
  websocketURL: `${location.protocol.replace('http', 'ws')}//${node}:26657`,
  chainID: 'ununifi-8-private-test',
  bech32Prefix: {
    accAddr: 'ununifi',
    accPub: 'ununifipub',
    valAddr: 'ununifivaloper',
    valPub: 'ununifivaloperpub',
    consAddr: 'ununifivalcons',
    consPub: 'ununifivalconspub',
  },
  minimumGasPrices: [
    {
      denom: 'uguu',
      amount: 0.015,
    },
  ],
  extension: {
    faucet: [
      {
        hasFaucet: true,
        faucetURL: `${location.protocol}//${node}:8000`,
        denom: 'ubtc',
        creditAmount: 100, // amount to credit in max request
        maxCredit: 99, // account has already maxCredit balance cannot claim anymore
      },
      {
        hasFaucet: true,
        faucetURL: `${location.protocol}//${node}:8002`,
        denom: 'uguu',
        creditAmount: 2000000,
        maxCredit: 1999999,
      },
      {
        hasFaucet: false,
        faucetURL: `${location.protocol}//${node}:8004`,
        denom: 'jpu',
        creditAmount: 10,
        maxCredit: 9,
      },
      {
        hasFaucet: true,
        faucetURL: `${location.protocol}//${node}:8006`,
        denom: 'ueth',
        creditAmount: 1000,
        maxCredit: 999,
      },
      {
        hasFaucet: false,
        faucetURL: `${location.protocol}//${node}:8008`,
        denom: 'euu',
        creditAmount: 10,
        maxCredit: 9,
      },
    ],
    monitor: {
      monitorURL: `${location.protocol}//${location.hostname}:9000`,
    },
    navigations: [
      {
        name: 'Monitor',
        link: '/monitor',
        icon: 'monitor',
      },
      {
        name: 'UnUniFi',
        link: '/ununifi/',
        icon: 'toll',
      },
    ],
    messageModules: [
      'bank',
      'auth',
      'crisis',
      'distribution',
      'evidence',
      'genaccounts',
      'gov',
      'ibc',
      'slashing',
      'staking',
      'auction',
      'ununifidist',
      'cdp',
      'incentive',
      'pricefeed',
    ],
  },
};
