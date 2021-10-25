const config = {
  restURL: `${location.protocol}//${location.hostname}:1317`,
  websocketURL: `${location.protocol.replace('http', 'ws')}//${location.hostname}:26657`,
  chainID: 'jpyx-3-test',
  bech32Prefix: {
    accAddr: 'jpyx',
    accPub: 'jpyxpub',
    valAddr: 'jpyxvaloper',
    valPub: 'jpyxvaloperpub',
    consAddr: 'jpyxvalcons',
    consPub: 'jpyxvalconspub',
  },
  extension: {
    faucet: [
      {
        hasFaucet: true,
        faucetURL: `${location.protocol}//${location.hostname}:8000`,
        denom: 'ubtc',
        creditAmount: 100, // amount to credit in max request
        maxCredit: 99, // account has already maxCredit balance cannot claim anymore
      },
      {
        hasFaucet: true,
        faucetURL: `${location.protocol}//${location.hostname}:8002`,
        denom: 'ujcbn',
        creditAmount: 2000000,
        maxCredit: 1999999,
      },
      {
        hasFaucet: true,
        faucetURL: `${location.protocol}//${location.hostname}:8004`,
        denom: 'jpyx',
        creditAmount: 10,
        maxCredit: 9,
      }
    ],
    monitor: {
      monitorURL: `${location.protocol}//${location.hostname}:9000`,
    },
    navigations: [
      {
        name: 'Monitor',
        link: '/monitor',
      },
      {
        name: 'JPYX',
        link: '/jpyx/',
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
      'botanydist',
      'cdp',
      'incentive',
      'pricefeed',
    ],
  },
};
