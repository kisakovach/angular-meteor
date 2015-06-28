var users = new Mongo.Collection("users");

if (Meteor.isClient) {

  
 var userControl = angular.module("userControl",['angular-meteor']);

 userControl.controller("userListController",["$scope","$meteor",function($scope,$meteor){
          $scope.users = $meteor.collection(users); 
          $scope.remove = function(id){
          $scope.users.remove(id);
  	  }
 }]);

 userControl.controller("addControl",["$scope","$meteor",function($scope,$meteor){

     $scope.users = $meteor.collection(users); 
     
 }]);

 var userApp  = angular.module("userApp",['userControl','ui.router']);
 userApp.config(function($stateProvider){
		 $stateProvider
		 .state("/",{
  			url:"",
			templateUrl: "client/add.ng.html",
  			controller:"addControl"
 		   })
		 .state("/add",{
			url:"/:id/:edit",
                        templateUrl: "client/add.ng.html", 
			controller:"addControl"
		  })
		 .state("/list",{
		    	url:"/list",
                        templateUrl: "client/index.ng.html",
		    	controller:"userListController"
		  });  

		}) 
 
}

if (Meteor.isServer) {
 Meteor.startup(function(){
  if(users.find().count()===0){
  var u=[{name:"name",password:"password",
			email:"email",sex:"male",notification:"notification"},
                 {name:"name",password:"password",
			email:"email",sex:"male",notification:"notification"},
                 {name:"name",password:"password",
			email:"email",sex:"male",notification:"notification"},
                 {name:"name",password:"password",
			email:"email",sex:"male",notification:"notification"},
                 {name:"name",password:"password",
			email:"email",sex:"male",notification:"notification"}
     ];

   for(var i=0; i<u.length; i++){

    users.insert(u[i]);

   };


  }



})


}