interface Person{
    firstName:string,
    lastName:string,
    // age:number
}

let user = { firstName: "Jane", lastName: "Hones" }

function greeter(person:Person):string {
    return "Hello, " + person.firstName + ", " + person.lastName;
  }
 
  ;
   
  document.body.textContent = greeter(user);