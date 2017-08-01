// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDDSseuMfdgCFfztSsnAhCIgi-itsfPEvM",
        authDomain: "db-diagrams.firebaseapp.com",
        databaseURL: "https://db-diagrams.firebaseio.com",
        projectId: "db-diagrams",
        storageBucket: "db-diagrams.appspot.com",
        messagingSenderId: "290073738630"
    }
};
