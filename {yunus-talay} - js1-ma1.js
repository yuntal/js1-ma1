// 1)   Create an object called cat. Give the object one property called complain. complain's value should be a method (a function) which logs the string "Meow!".

const cat = {

    complain: function() {
    console.log("Meow!");
    }
}
cat.complain();

// 2)  Select the h3 from the HTML below using the querySelector method and assign it to a variable called heading. <h3>Subheading</h3>


const pageHeading = document.querySelector("h3");
pageHeading.innerText = "heading";

// 3) Use the style property on the heading variable from the question above to change its font size to "2em".

pageHeading.style.fontSize = "2em";


// 4) Add a class to the heading variable called subheading.

pageHeading.className += "subheading";


// 5) Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.


const pageQuotes = document.querySelector("p");
pageQuotes.innerHTML = "paragraphs";

// 6)  Select the div by its class from the HTML below, assign it to a variable called resultsContainer and set its inner HTML to be <p>New paragraph</p>. 


const resultsContainer = document.querySelector("div");
console.log(«div");
resultsContainer.innerText = '<p>New paragraph</p>';


// 7)  Create a function that has one argument called catArray.
Inside the function, loop through the catArray argument and console log the name property in each object.
Call the function and pass in the cats variable below.


function printName() {
    const name = "catArray";
    console.log(name);
}
for (var i=0; i < printName.length; i++);

printName();

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


