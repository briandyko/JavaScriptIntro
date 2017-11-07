//console.log("Hello");
//var name = "Brian";

//console.log("Hello " + name);

//for (var i = 0; i <= 10; i++)
//{
//    console.log(i);
//}

function helloWorld() {
    var greeting = "Hello World!";
    alert(greeting);
}

//helloWorld();

function add(a, b) {
    return a + b
}

console.log(add(2, .4));

//var otherFunction = function (a, b) {               //anonymous function - works the same as normal function - storing a function inside the variable
//    return a + b;
//}
//console.log(otherFunction(2, .4));

//write a function that takes in a n ame and prints "Hello [name]"

function nameGreeting(name) {
    
    console.log("Hello " + name);
    return "Hello " + name;
}

console.log(nameGreeting("Brian"));

function updateDiv() {
    var outputString = "Hello and welcome to my web page.";
    document.getElementById("sectionOne").innerHTML = "<p>" + outputString + "</p>";
}

function swap() {
    var imageSrc = document.getElementById("swapImage").src;

    if (imageSrc.includes("aiah")) {
        document.getElementById("swapImage").src = "images/paris.jpg";
    }
    else {
        document.getElementById("swapImage").src = "images/isaiah.jpg";
    }

    console.log(document.getElementById("swapImage").src);
}

function printArray()
{
    var favFoods = ["Pizza", "Candy", "Marshmallows", "Peppers", "Bananas"];
    var outputText = "<ul>";

    for (i = 0; i < favFoods.length; i++) {
        outputText += "<li>" + favFoods[i] + "</li>";
    }
    outputText += "</ul>";
    document.getElementById("sectionTwo").innerHTML = outputText;
}