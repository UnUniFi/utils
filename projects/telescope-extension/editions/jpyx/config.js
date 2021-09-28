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
    faucet: {
      hasFaucet: true,
      faucetURL: `${location.protocol}//${location.hostname}:8000`,
      denoms: [
        'ujsmn',
        'ubtc',
        'jpyx',
      ],
      creditAmount: 10, // amount to credit in each request
      maxCredit: 100, // maximum credit per account
    },
    navigations: [
      {
        name: 'JPYX',
        link: '/jpyx/',
      },
    ],
    messageActions: [''],
    messageModules: [
      'bank', // hit
      'auth',
      'crisis',
      'distribution',
      'evidence',
      'genaccounts',
      'gov',
      'ibc',
      'slashing',
      'staking', // hit
    ],
  }
};
