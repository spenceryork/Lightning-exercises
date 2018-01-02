// Exercise #1 12/04/17

// let companyArray = [
//     {name: "Bob", department: "sales", title: "sales manager"},
//     {name: "Tina", department: "finance", title: "director of finance"},
//     {name: "Randy", department: "IT", title: "hardware guy"},
//     {name: "Glenda", department: "C-suite", title: "CEO"}
// ];

// for (let i = 0; i < companyArray.length; i++) {
//     console.log(`${companyArray[i].name}'s job title is ${companyArray[i].title}`)
// };


// Exercise #2 12/05/17

// Make an object with at least three properties. One property should be a method
// Create a new object that links to the first object.
// Give the new object two properties of its own
// In the console, call .hasOwnProperty() on the new object, passing in an inherited property as an argument. Does it return true or false?
// Do it again, but this time pass in one of the properties you added to the new object. True or false?

// let obj = {
//     height: 5,
//     name: "Spencer",
//     func: function(){
//     }
// }

// let newObj = Object.create(obj)

// newObj.city = "Nashville";
// newObj.state = "Tennessee";

// Helpful link from Gregg
// var Foo = {
// 	Foo: function(who) {
// 		this.me = who;
// 		return this;
// 	},
// 	identify: function() {
// 		return "I am " + this.me;
// 	}
// };

// var Bar = Object.create(Foo);

// Bar.Bar = function(who) {
// 	// "constructors" (aka "initializers") are now in the `[[Prototype]]` chain,
// 	// so `this.Foo(..)` works easily w/o any problems of relative-polymorphism
// 	// or .call(this,..) awkwardness of the implicit "mixin" pattern
// 	this.Foo("Bar:" + who);
// 	return this;
// };

// Bar.speak = function() {
// 	alert("Hello, " + this.identify() + ".");
// };

// var b1 = Object.create(Bar).Bar("b1");
// var b2 = Object.create(Bar).Bar("b2");

// b1.speak(); // alerts: "Hello, I am Bar:b1."
// b2.speak(); // alerts: "Hello, I am Bar:b2."

// // some type introspection
// Bar.isPrototypeOf(b1); // true
// Bar.isPrototypeOf(b2); // true
// Foo.isPrototypeOf(b1); // true
// Foo.isPrototypeOf(b2); // true
// Foo.isPrototypeOf(Bar); // true
// Object.getPrototypeOf(b1) === Bar; // true
// Object.getPrototypeOf(b2) === Bar; // true
// Object.getPrototypeOf(Bar) === Foo; // true


// Exercise #3 12/06/17
// Loop over every item in this array and return a new array that contains only strings. and log out the result.

// let arr = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"].filter( (item) => {
//     return typeof(item) === "string";
// });

// console.log("string array", arr);


// Exercise #4 01/02/18

// console.log("hi");

// let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];

// let fave_demo = [];

// FOR LOOP

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 18 && ages[i] <= 49) {
//         fave_demo.push(ages[i]);
//     }
// }
// console.log("for loop array", fave_demo);

// FOR EACH

// ages.forEach(function(x){
//     if (x >= 18 && x <= 49) {
//         fave_demo.push(x);
//     }
// })
// console.log("for each array", fave_demo);

// FILTER

// let fave_demo = ages.filter( (age) => age < 50 && age > 17 )
// console.log("filter", fave_demo);


// Exercise #5 01/02/18

// Use dot notation to access the value of the key "meaning_of_life"

// hitchhikers_guide = {
//     characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
//     catchphrase: "Don't Panic",
//     random_facts: {
//       copies_sold: 14000000,
//       formats: ["radio", "TV", "film", "graphic novel"],
//       ultimate_answer: {
//         meaning_of_life: 42
//       }
//     }
//   };

// let meaningOfLife = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life;
// console.log("meaning of life", meaningOfLife);


// Exercise #6 01/02/18

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"];

// Capitalize 'the' insert a comma after 'teacher' and output "Yoda says, "The greatest teacher, failute is"

yoda_quote.map( (word) => {
    if(word === "the")
        word = word.slice(0,1).toUpperCase() + word.slice(1);
    if (word === "teacher")
        word = word + ","
    return word
}).join(" ")
