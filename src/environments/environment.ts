// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'http://ec2-54-169-155-55.ap-southeast-1.compute.amazonaws.com/api',
  firebase: {
    apiKey: 'AIzaSyAshtkI8Izqe9oYV5wvAONbFzQZhAXC_cg',
    authDomain: 'hapu-60236.firebaseapp.com',
    databaseURL: 'https://hapu-60236.firebaseio.com',
    projectId: 'hapu-60236',
    storageBucket: '',
    messagingSenderId: '1026563545081'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
