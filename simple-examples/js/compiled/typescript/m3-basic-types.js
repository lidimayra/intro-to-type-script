// Exercise 1
var firstname;
var lastname;
var fullname;
firstname = 'joe';
lastname = 'smith';
fullname = firstname + " " + lastname;
// Exercise 2
var x;
var y;
var a;
a = 9;
x = 5;
y = 7;
a = x + y;
document.body.innerHTML += " " + a;
// Exercise 3
var pets;
var myPets = "";
pets = ["fido", "spot", "seeker"];
pets.forEach(function (concat) {
    myPets = myPets + concat + ", ";
});
document.body.innerHTML = "My pets are " + " " + myPets;
