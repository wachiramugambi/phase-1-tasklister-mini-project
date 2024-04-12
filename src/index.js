document.addEventListener("DOMContentLoaded", () => {
  // your code here
});// Add event listener for when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Grab the form element for creating new tasks
  const newTaskForm = document.querySelector('form');

  // Attach a submit event listener to the newTaskForm
  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the value of the input field for the new task description
    const newToDo = e.target.querySelector('#new-task-description').value;

    // Call the buildToDo function to create a new task item
    buildToDo(newToDo);

    // Reset the form to clear the input field
    newTaskForm.reset();
  });
});

// Function to build a new task item
function buildToDo(newToDo) {
  // Create a new list item element and a delete button element
  const taskLi = document.createElement('li');
  const deleteButton = document.createElement('button');

  // Set the text content of the delete button to 'x'
  deleteButton.textContent = 'x';

  // Set the text content of the list item to the new task description
  taskLi.textContent = newToDo;

  // Append the delete button to the list item
  taskLi.appendChild(deleteButton);

  // Append the list item to the unordered list with the id 'tasks'
  document.querySelector('#tasks').appendChild(taskLi);

  // Attach a click event listener to the delete button to handle task deletion
  deleteButton.addEventListener('click', handleDelete);
}

// Function to handle task deletion
function handleDelete(e) {
  // Remove the parent list item when the delete button is clicked
  e.target.parentNode.remove();
}

  
  
  