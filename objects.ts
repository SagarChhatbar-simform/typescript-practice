var person = {
    firstName:"sagar", 
    lastName:"chhatbar", 
    sayHello:function() {  }   
 } 
 person.sayHello = function() {  
    console.log("hello "+person.firstName)
    console.log(person.lastName)

 }  
 person.sayHello()