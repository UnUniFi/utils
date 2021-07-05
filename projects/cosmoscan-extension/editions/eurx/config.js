const config = {
  restURL: `${location.protocol}//${location.hostname}:1317`,
  websocketURL: `${location.protocol.replace('http', 'ws')}//${location.hostname}:26657`,
  chainID: 'eurx-1-test',
  bech32Prefix: {
    accAddr: 'eurx',
    accPub: 'eurxpub',
    valAddr: 'eurxvaloper',
    valPub: 'eurxvaloperpub',
    consAddr: 'eurxvalcons',
    consPub: 'eurxvalconspub',
  },
  extension: {
    navigations: [
      {
        name: 'EURX',
        link: '/eurx',
      }
    ],
    messageActions: ['']
  }
};
