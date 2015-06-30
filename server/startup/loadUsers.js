 Meteor.startup(function(){
  if(users.find().count()===0){
  var u=[{name:"name",password:"password",
			email:"email",sex:"1",notification:true},
                 {name:"name",password:"password",
			email:"email",sex:"2",notification:true},
                 {name:"name",password:"password",
			email:"email",sex:"1",notification:false},
                 {name:"name",password:"password",
			email:"email",sex:"2",notification:true},
                 {name:"name",password:"password",
			email:"email",sex:"1",notification:false}
     ];

   for(var i=0; i<u.length; i++){

    users.insert(u[i]);

   };
  }
})