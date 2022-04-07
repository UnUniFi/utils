const configs = [
  // local
  {
    id: location.hostname,
    restURL: `${location.protocol}//${location.hostname}:1317`,
    websocketURL: `${location.protocol.replace('http', 'ws')}//${location.hostname}:26657`,
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
      navigations: [],
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
  },
  // A node
  {
    id: 'a.private-test.ununifi.cauchye.net',
    restURL: `${location.protocol}//a.private-test.ununifi.cauchye.net:1317`,
    websocketURL: `${location.protocol.replace(
      'http',
      'ws',
    )}//a.private-test.ununifi.cauchye.net:26657`,
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
          faucetURL: `${location.protocol}//a.private-test.ununifi.cauchye.net:8000`,
          denom: 'ubtc',
          creditAmount: 100, // amount to credit in max request
          maxCredit: 99, // account has already maxCredit balance cannot claim anymore
        },
        {
          hasFaucet: true,
          faucetURL: `${location.protocol}//a.private-test.ununifi.cauchye.net:8002`,
          denom: 'uguu',
          creditAmount: 2000000,
          maxCredit: 1999999,
        },
        {
          hasFaucet: false,
          faucetURL: `${location.protocol}//a.private-test.ununifi.cauchye.net:8004`,
          denom: 'jpu',
          creditAmount: 10,
          maxCredit: 9,
        },
        {
          hasFaucet: true,
          faucetURL: `${location.protocol}//a.private-test.ununifi.cauchye.net:8006`,
          denom: 'ueth',
          creditAmount: 1000,
          maxCredit: 999,
        },
        {
          hasFaucet: false,
          faucetURL: `${location.protocol}//a.private-test.ununifi.cauchye.net:8008`,
          denom: 'euu',
          creditAmount: 10,
          maxCredit: 9,
        },
      ],
      monitor: {
        monitorURL: `${location.protocol}//${location.hostname}:9000`,
      },
      navigations: [],
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
  },
  // B node
  {
    id: 'b.private-test.ununifi.cauchye.net',
    restURL: `${location.protocol}//b.private-test.ununifi.cauchye.net:1317`,
    websocketURL: `${location.protocol.replace(
      'http',
      'ws',
    )}//b.private-test.ununifi.cauchye.net:26657`,
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
          faucetURL: `${location.protocol}//b.private-test.ununifi.cauchye.net:8000`,
          denom: 'ubtc',
          creditAmount: 100, // amount to credit in max request
          maxCredit: 99, // account has already maxCredit balance cannot claim anymore
        },
        {
          hasFaucet: true,
          faucetURL: `${location.protocol}//b.private-test.ununifi.cauchye.net:8002`,
          denom: 'uguu',
          creditAmount: 2000000,
          maxCredit: 1999999,
        },
        {
          hasFaucet: false,
          faucetURL: `${location.protocol}//b.private-test.ununifi.cauchye.net:8004`,
          denom: 'jpu',
          creditAmount: 10,
          maxCredit: 9,
        },
        {
          hasFaucet: true,
          faucetURL: `${location.protocol}//b.private-test.ununifi.cauchye.net:8006`,
          denom: 'ueth',
          creditAmount: 1000,
          maxCredit: 999,
        },
        {
          hasFaucet: false,
          faucetURL: `${location.protocol}//b.private-test.ununifi.cauchye.net:8008`,
          denom: 'euu',
          creditAmount: 10,
          maxCredit: 9,
        },
      ],
      monitor: {
        monitorURL: `${location.protocol}//b.private-test.ununifi.cauchye.net:9000`,
      },
      navigations: [],
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
  },
];
