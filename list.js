var todos = ["Buy new cat"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	//handle input
	if(input === "list") {
		listTodos();
}	else if(input === "new") {
		addTodo();
}	else if(input === "delete"){
		deleteTodo();
}
	//ask again for new input
	input = prompt("What would you like to do?");
}
console.log("OK, You've quit the app.")

	//functions placed down here to create more condensed look for the top.
function listTodos(){
		console.log("********")
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});
		console.log("********")
}
function addTodo(){
		//ask for new to-do
	var newTodo = prompt("Enter new todo")
	//add to to-do array
	todos.push(newTodo);
	console.log("Added Todo");
}
function deleteTodo(){
	//ask for index of todo to be deleted
	var index = prompt("Enter index of todo to delete");
	//delete that todos
	//splice()
	todos.splice(index,1);
	console.log("Deleted Todo");
}

testing to see if renaming on github messes this up