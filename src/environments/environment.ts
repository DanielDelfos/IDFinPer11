// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlCloudFunctionsTipo: "local"
  // urlCloudFunctionsTipo: "pruebas"
  // urlCloudFunctionsTipo: "real"  //no descomentar, pasa solo con build --prod

};

export const firebaseConfig = {

  //AMBIENTE DESARROLLO (DEJAR SOLO UN AMBIENTE!!)
  // apiKey: "AIzaSyBwzPKRENJ2RyQnoqf_IOQlKzqIYvwuL2I",
  // authDomain: "imagenweb13.firebaseapp.com",
  // databaseURL: "https://imagenweb13.firebaseio.com",
  // projectId: "imagenweb13",
  // storageBucket: "imagenweb13.appspot.com",
  // messagingSenderId: "1090749417739",
  // appId: "1:1090749417739:web:34e250ce8c93e1b87e3a0e",
  // measurementId: "G-4V901N0565"

  //AMBIENTE PRODUCCION (DEJAR SOLO UN AMBIENTE!!)
  apiKey: "AIzaSyCeGN9uSV8Ei-l5V-ifgGMIBsneoxVbASo",
  authDomain: "imagenweb13---orue-prod.firebaseapp.com",
  projectId: "imagenweb13---orue-prod",
  storageBucket: "imagenweb13---orue-prod.appspot.com",
  messagingSenderId: "365836477823",
  appId: "1:365836477823:web:f4b427cd9c92919dada64a",
  measurementId: "G-55WLPDS6FJ"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
