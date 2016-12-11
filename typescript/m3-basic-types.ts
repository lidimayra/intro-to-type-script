// Exercise 1
var firstname: string;
var lastname: string;
var fullname: string;

firstname = 'joe';
lastname = 'smith';

fullname = firstname + " " + lastname;


// Exercise 2
var x: number;
var y: number;
var a: number;

a = 9;
x = 5;
y = 7;
a = x + y;

document.body.innerHTML += " " + a;


// Exercise 3
var pets: string[];
var myPets: string = "";
pets = ["fido", "spot", "seeker"];

pets.forEach(function (concat) {
    myPets = myPets + concat + ", ";
});

document.body.innerHTML = "My pets are "+ " " + myPets;
