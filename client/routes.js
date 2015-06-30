angular.module("userApp").config(["$stateProvider","$urlRouterProvider","$locationProvider",
      function($stateProvider,$urlRouterProvider,$locationProvider){
	    $locationProvider.html5Mode(true);

    	    $stateProvider
		 .state("add",{
  			url:"/add",
			templateUrl: "client/views/add.ng.html",
  			controller:"addControl"
 		   })
		 .state("edit",{
			url:"/add/:id",
                        templateUrl: "client/views/add.ng.html", 
			controller:"editControl"
		  })
		 .state("list",{
		    	url:"/list",
                        templateUrl: "client/views/index.ng.html",
		    	controller:"userListController"
		  })
		 .state("test",{
		    	url:"/test",
                        templateUrl: "client/views/test.ng.html",
		    	controller:"test"
		 })
  
                  $urlRouterProvider.otherwise("/add");

	}]);