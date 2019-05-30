(function() {

  "use strict";

  angular
    .module('vassarInterns')
    .factory('classifiedsFactory', function($http) {

      function getClassifieds() {
        return $http.get('data/interns.json');
      }

      return {
        getClassifieds: getClassifieds
      }
      
    });
    
})();