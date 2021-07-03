const config = {
  restURL: `${location.protocol}//${location.hostname}:1317`,
  websocketURL: `${location.protocol.replace('http', 'ws')}://${location.hostname}:26657`,
  chainID: 'jpyx-1-test',
  bech32Prefix: {
    accAddr: 'jpyx',
    accPub: 'jpyxpub',
    valAddr: 'jpyxvaloper',
    valPub: 'jpyxvaloperpub',
    consAddr: 'jpyxvalcons',
    consPub: 'jpyxvalconspub',
  },
  extension: {
    navigations: [
      {
        name: 'JPYX',
        link: '/jpyx',
      }
    ],
    messageActions: ['']
  }
};
