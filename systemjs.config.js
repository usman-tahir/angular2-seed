/**
 * System configuration for Angular 2 projects
 * Can be adjusted based on application needs
 */

(function (global) {
  var map,
      packages,
      ngPackageNames,
      setPackageConfig,
      config;

  map = {
    "app": "app",
    "@angular": "node_modules/@angular",
    "angular2-in-memory-web-api": "node_modules/angular2-in-memory-web-api",
    "rxjs": "node_modules/rxjs"
  };

  packages = {
    "app": {
      main: "main.js",
      defaultExtension: "js"
    },
    "rxjs": {
      defaultExtension: "js"
    },
    "angular2-in-memory-web-api": {
      main: "index.js",
      defaultExtension: "js"
    }
  };

  ngPackageNames = [
    "common",
    "compiler",
    "core",
    "forms",
    "http",
    "platform-browser",
    "platform-browser-dynamic",
    "router",
    "router-deprecated",
    "upgrade"
  ];

  function packIndex(packageName) {
    packages["@angular/" + packageName] = {
      main: "index.js",
      defaultExtension: "js"
    }
  }

  function packUmd(packageName) {
    packages["@angular/" + packageName] = {
      main: "/bundles/" + packageName + ".umd.js",
      defaultExtension: "js"
    }
  }

  setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  ngPackageNames.forEach(setPackageConfig);
  config = {
    map: map,
    packages: packages
  };
  System.config(config);

})(this);
