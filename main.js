var btn = document.querySelector("#add-task");
// Select the button element with the id "add-task" and cast it to HTMLButtonElement
var h1 = document.querySelector("h1");
// Select the first h1 element on the page
var ul = document.querySelector("ul");
// Select the first ul element on the page
var input = document.querySelector("input");
// Select the first input element on the page
btn.addEventListener('click', addtask);
// Add an event listener to the button that calls the addtask function when clicked
input.addEventListener('keypress', function (event) {
    // Add an event listener to the input field that listens for keypress events
    if (event.key === 'Enter') {
        // If the Enter key is pressed, call the addtask function
        addtask();
    }
});
function addtask() {
    // This function is called when the button is clicked or the Enter key is pressed
    var li = document.createElement("li");
    // Create a new li element
    if (input.value.trim() === "") {
        // Check if the input field is empty
        alert("Please enter a task");
    }
    else {
        li.innerText = input.value;
        // Set the text of the li element to the value of the input field
        ul.appendChild(li);
        // Add the li element to the ul element
        input.value = "";
        // Clear the input field
        var deletebtn = document.createElement('button');
        // Create a new button element
        deletebtn.innerText = "Delete your task";
        // Set the text of the button to "Delete your task"
        li.appendChild(deletebtn);
        // Add the button to the li element
        deletebtn.classList.add('reButton');
        // Add the class "reButton" to the button
        deletebtn.addEventListener('click', function () {
            // Add an event listener to the button that removes the li element when clicked
            ul.removeChild(li);
        });
    }
}
