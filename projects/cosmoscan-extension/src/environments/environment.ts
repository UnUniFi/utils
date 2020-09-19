// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  env: 'development',
  url: 'http://127.0.0.1:8080',
  chain_id: 'jpyx-1',
  bech32_prefix: {
    acc_addr: 'jpyx',
    acc_pub: 'jpyxpub',
    val_addr: 'jpyxvaloper',
    val_pub: 'jpyxvaloperpub',
    cons_addr: 'jpyxvalcons',
    cons_pub: 'jpyxvalconspub',
  },
  indexed_db_name: 'jpyx',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
