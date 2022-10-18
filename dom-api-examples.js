//DOM Manipulation--> The process of creating an element,adding text to it,assigning attributes is k/a DOM manipulation
//objective--> creating an HTML element using javascript
//followed by palcing the object to its right position using parent.appendChild
//creating an element using document object 
const para = document.createElement("p");
//assigning attribute using setAttribute function
//syntax--> elementName.setAttribute("attributeName" , "attributeValue")
para.setAttribute("id", "js-para");
console.log(para.getAttribute("id"));
//another way to add className attribute, Syntax--> elementName.classList.add("className_Value")
para.classList.add("one");
para.classList.add("second");
//removing the class attribute from an element, Syntax-->  elementName.classList.remove("className_Value")
para.classList.remove("second");
//adding text content to my element
para.textContent = "This is created using DOM API";
//now the element that i have created should be within body of the html  document
//to do this i use the document object and append my element as a child yo body
document.body.appendChild(para);
//creating a sapn tag
const span = document.createElement("span");// dom node
//assigning attributes to my span element
span.id="span-id";
span.className="blue";
//To add an html element within a string we use .innerHTML instead of .textContent
//.innerHTML is also used to create a child element
span.innerHTML=" This is the span text<em> created using dom.createElement</em>";
//adding styling using CSS object model
span.style.backgroundColor = "yellow";
//appending my span element as a child to para element
para.appendChild(span);
//creating an unordered list programmatically
const hobbies = ["coding","swimming","jogging"];
const list = document.createElement("ul");
for(let hobby of hobbies){
    list.innerHTML += "<li class='blue'>" + hobby + "</li>";
}
document.body.appendChild(list);

//getting or retriving the element
//acessing the elements with the id
console.log(document.getElementById("first-para").textContent);
//acessing the elements with the className
console.log(document.getElementsByClassName("blue"));3
