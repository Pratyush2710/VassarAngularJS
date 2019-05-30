(function() {

  "use strict";

  angular
    .module('vassarInterns', ['ngMaterial'])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');
    });
        
})();