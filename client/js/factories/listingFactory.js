angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http://localhost:'+process.env.PORT+'/api/listings');
    },
	
	create: function(listing) {
	  return $http.post('http://localhost:'+process.env.PORT+'/api/listings', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
    return $http.delete('http://localhost:'+process.env.PORT+'/api/listings', id);
    }
  };

  return methods;
});