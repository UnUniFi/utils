const config = {
  restURL: `${location.protocol}//${location.hostname}:1317`,
  websocketURL: `${location.protocol.replace('http', 'ws')}//${location.hostname}:26657`,
  chainID: 'ununifi-7-private-test',
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
    }
  ],
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
        denom: 'uguu',
        creditAmount: 2000000,
        maxCredit: 1999999,
      },
      {
        hasFaucet: false,
        faucetURL: `${location.protocol}//${location.hostname}:8004`,
        denom: 'jpu',
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
