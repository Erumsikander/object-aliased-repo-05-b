

// Aliased Object Type

type ITManager = 
{
    name : string,
    position : string,
    salary : number,
    experience : number,
    city : string,
}

let Employee : ITManager = 
{
    name : "Erum Sikander",
    position : "Manager",
    salary : 500000,
    experience : 5,
    city : "Karachi"
}

// console.log(Employee.name + " " + Employee.position + " " + Employee.salary + " " + Employee.experience + " " + Employee.city);
console.log(Employee["name"]);
console.log(Employee["position"]);
console.log(Employee["salary"]);
console.log(Employee["experience"]);
console.log(Employee["city"]);