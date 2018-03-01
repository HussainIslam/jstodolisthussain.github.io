var button = document.getElementById("enter"); 				//putting enter item into a variable
var input = document.getElementById("userinput"); 			//putting input value into a variable
var ul = document.querySelector("ul"); 						//putting the unordered list into a variable
var listItems = document.querySelectorAll("li"); 			//putting all the list items into a variable


function inputLength() { 									//function created to measure the length of the input value
	return input.value.length; 								//returning the length of the input
}

//creates a list element from the input value and adds to the existing list
function createListElement() {
		var li = document.createElement("li"); 				//putting all the list items into li variable
		li.appendChild(document.createTextNode(input.value)); //appending the input value to the li variable created
		ul.appendChild(li); 								//appending the li item to the unordered list
		input.value=""; 									//resetting the input value

//adds a delete button to 
		var btn = document.createElement("button");			//creating a button element and assigning that to btn
		btn.appendChild(document.createTextNode("Delete!"));//creating a textNode called delete! and append that to button element
		li.appendChild(btn);								//appending the button to the list element

//deletes the newly created list item on click of the button 		
		btn.onclick=removeParent;							//delete the parent element if the button is clicked
}

//create a list element only if the input item is not empty
function addListAfterClick(){								
	if (inputLength()>0) {									//first checks whether the length of the inputted text is more than zero
		createListElement();								//if the inputted text is more than zero run the respective function
}}

//create a list element if "enter" is pressed
function addListAfterKeypress(event) {						
	if (inputLength()>0 && event.keyCode ===13) {			//cheks for the length and the key pressed on the keyboard is enter
		createListElement();								//runs the respective function
}}

//runs respective programs once the mouse is clicked or "enter" is pressed on keyboard
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


// checking off items on the list
function checkMyList(event){
  event.target.classList.toggle("done");					//toggles the "done" class of the event target
}
ul.addEventListener("click", checkMyList);					//listens to the click on unordered list items


//creating delete button to existing list items
for(i=0;i<listItems.length;i++){							//runs the loop for all items that are less than the total length of the list
	var btn=document.createElement("button");				//creating a button element and assigning that to btn
	btn.appendChild(document.createTextNode("Delete!"));	//creating a textNode called delete! and append that to button element	
	listItems[i].appendChild(btn);							//appending the button to each of the list items
	
	btn.onclick=removeParent;								//deletes the parent item on click of mouse	
}


//removing list items on click of the button
function removeParent(event){								
	event.target.removeEventListener("click",removeParent, false);	//removing the eventlistener from the item
	event.target.parentNode.remove();								//removing the item from the list
}
