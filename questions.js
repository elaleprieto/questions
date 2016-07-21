// Question 1: Write a function that repeats the String
function repeatify(a, b) {
	return a.repeat(b);
}

// Question 2: Return the file extension or "false" if no extension
/* 	1) The unit test should expect 'png' as a result of calling with file = 'mozio.png'
	2) The unit test should expect 'png' as a result of calling with file = 'moZio.new.png'
	3) The unit test should expect false as a result of calling with file = undefined
	4) The unit test should expect false as a result of calling with file = 'moziopng'
*/
function getFileExtension(file) {
	if(file !== undefined) {
		let fileParts = file.split('.');
		if(fileParts.length >= 2) {
			return fileParts[fileParts.length - 1];
		}
	}
	return false;
}

// Question 3: Write a simple validation script for a simple form
/*
	<form id="theForm" method="post" action="/action.php" onsubmit="return validate(this)">
		<input type="text" value="" required />
		<input type="text" value="" required />
		<input type="email" value="" required />
		<input type="submit" name="submit" value="Submit" />  
	</form>
*/
function validate(form) {
	let email = '';
	for(let i = 0; i < form.elements.length; i++) {
		if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
			return false;
		}
		if(form.elements[i].type === 'email') {
			email = form.elements[i].value;
		}
	}
	if(email !== '' && validateEmail(email)) {
		return true;
	}
	return false;
}

// Question 4: What is variable hoisting? How the new ES6 keywords const and let solve some cases?
/* 	Variable hoisting is the behavior of processing variable declarations before execute code, 
	means that you can declare variables anywhere in code even after using it and it will be the same as if you declare it at the top.
	In MDN recommends that always declre variable at the top of their scope for more claerness.
	The new ES6 keywords const and let also are hoited but doesn't initialize like var does.
	So, like MDN says: the variable will be in a temporal dead zone until the declaration is processed.
*/


// Question 5: What is a “closure” in JavaScript?
/* 	Closures are functions that define a scope and 'remember' the enviroment in which they were created (MDN).
	Is a special type of object that combine a function and the enviroment in which was created.
	Example:
	function displayAge() {
		var age = 32;
		function showMyAge() {
			alert(age);
		}
		return showMyAge;
	}
	var myAge = displayAge();
	myAge();
	
	When we run the example, we will see that the called to myAge() will display the number 32 in a alert box,
	this is because myAge() has become a closure.

	Another example is when we want some funcionality to be repeated, in the example: an alert on anchor tags.
	We could this:
		var anchors = document.getElementsByTagName("a");
		for(var i = 0; i < anchors.length; i++) {
			anchors[i].onclick = function() {
				alert(i);
			};
		}
	But that code would 'remember' only the last value of 'i'.
	Instead, we should implement a closure to reach the goal:
		var anchors = document.getElementsByTagName("a");
		for(var i = 0;  i < anchors.length; i++) {
			anchors[i].onclick = (function(i) {
				return function() {
					alert(i);
				};
			})(i);
		}
	This way, we fix the problem and we get the right value of 'i'.
	In ES6 we could write the code a little more readeable with the help of let:
		var anchors = document.getElementsByTagName("a");
		for(let i = 0; i < anchors.length; i++) {
			anchors[i].onclick = function() {
				alert(i);
			}
		}
	Using let instead of var keyword allow us to bind the scope of the variable to the local block,
	reaching the same goal and in a more readeable code.
*/

// Question 6: How does prototypal inheritance differ from classical inheritance.
/*
	Prototypal Inheritance is dynamic and doesn't provide a class implementation like Classical Inheritance.
	In EC6, the class keyword is introduced but JavaScript remains as a prototype-based language.
	In JavaScript, there is only one construct: object, and the inheritance go from one internal link that object have
	to another. The internal link is called: prototype. The prototype chain stops in the keyword null as a final prototype.
	When we try to access an object property, JavaScript will start to look after in the object itself and then,
	if not found, will search in the prototype chain.
	In Classical Inheritance, classes are immutables rather than prototypes that can be modified at runtime. 
	Also, in Prototypal Inheritance, object can inherit from multiples prototypes rather than Classical Inheritance that
	may not be supported multiple inheritance.
*/

// Question 7: Write a code to remove duplicates from an array and return an array of only unique elements.
function removeDuplicates(elements) {
	let newElements = [];
	for(let i = 0; i < elements.length; i++) {
		if (newElements.indexOf(elements[i]) < 0) {
			newElements.push(elements[i]);
		}
	}
	return newElements;
}

// Question 8: What means that Functions are a first class citizen in Javascript?
/*
	Like Wikipedia says "this means the language supports passing functions as arguments to other functions
	, returning them as the values from other functions, and assigning them to variables or storing them in data structures". (https://en.wikipedia.org/wiki/First-class_function)
	In Javascript, functions are like any other object and we can assign functions to variables, pass them to other functions,
	return functions as values and so on.
*/

// Question 9: What means that something is Immutable? And what are the advantages of using immutability in data flow?
/*
	Something immutable means than once it's created, it can never be changed.
	Sincerely, I didn't know so much about the advantages, but reading an article[1] I understand that 
	using immutables data structures can improve the performance, for example in ReactJs components.
	[1] http://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/ 
 */

// Question 10: What is a pure function and what are the advantages of using it?
/*
	A function is pure if returns the same result when it's called with the same parameters, and doesn't modified variables out of its scope.
	The advantages includes: easier to unit test, simplification of code, better readeable and clear code, 
	doesn't impact outside the scope, we can focus on the inputs and outputs.
*/

// Question 11: In order to make components more reusable which components should carry specific business logic and which ones shouldn’t?
/*
	In MVC frameworks like Angular, Controllers are resposables for the business logic. In React I don't know how they handle,
	I understand that is a View framework, I assume there is a way to separate business components than view specific components.
*/

// Question 12: What advantage have the one data flow used by React/Redux (and other flux implementations) compared with the two way binding flow?
/*
	Two way binding could lead to unpredictable cascade updates because when we change a model, 
	it may triggers some events that changes again the model and so on... 
	Data flow in a sigle direction gives a better control on what's going on.
*/

// Question 13: What is a High Order Component?
/*
	High Order Components are like class factories usually implemented as pure functions, that allow us to reuse code,
	add funcionality to other components and get apps easier to maintain or to upgrade.
*/

// Question 14: What are the pros and cons of functional programming vs object-oriented programming?
/*
	It will depends on what are the project needs.
	In object-oriented programming is easy to reuse code in others apps because of the modular structures, it provide encapsulation, inheritance, 
	polymorphism, it easy to maintain. It's easy to understand for beginners.
	Functional programming could be much more performing, has better handle of concurrency and recursive operations. 
	In desadvantage, funcional prrogramming could be more difficult to learn at first. 
*/

// Question 15: What does “favor object composition over class inheritance” mean?
/*
	Mens that the object should get its behavior and properties based in a group of other objects/classes that
	implements the required funcionality, rather than inherit from a parent class. 
*/