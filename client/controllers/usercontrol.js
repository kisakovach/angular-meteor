 userControl = angular.module("userControl",['angular-meteor']);

 userControl.controller("userListController",["$scope","$meteor","$state",
		function($scope,$meteor,$state){
          		$scope.sex=['none','male','female'];
          		$scope.users = $meteor.collection(users); 
          		$scope.remove = function(id){
          		 $scope.users.remove(id);
  	  		};
          		$scope.edit = function(id){
          		 //console.log("/add/"+id);
           		//$location.path("/add/"+id);
             		 $state.go("edit",{id:id});
	        	};

	   }]);

 userControl.controller("addControl",["$scope","$meteor","$state",
	       function($scope,$meteor,$state){
                  $scope.new = {};
                  $scope.new.sex = 1;
                  $scope.new.notification=true;
	          $scope.users = $meteor.collection(users);
	          $scope.list = function(){
                    //$location.path("/list");
                    $state.go("list");
                   };
                  $scope.add = function(){
                    $scope.users.push($scope.new);
                  }
	    }]);


  userControl.controller("editControl",["$scope","$meteor","$state","$stateParams",
	function($scope,$meteor,$state,$stateParams){

	     $scope.users = $meteor.collection(users);
             $scope.new = $meteor.object(users,$stateParams.id,false);
	     $scope.list = function(){
                    $state.go("list");
                   };
             $scope.add = function(){
               $scope.new.save();                
             }
	 }]);

   userControl.controller("test",["$scope","$meteor", function($scope,$meteor){

       $scope.values = [{
	  id: 1,
	  label: 'aLabel',
	  subItem: { name: 'aSubItem' }
	}, {
	  id: 2,
	  label: 'bLabel',
	  subItem: { name: 'bSubItem' }
	}];

	$scope.selected = { name: 'aSubItem' };
   

   }])

