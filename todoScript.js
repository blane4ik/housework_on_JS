
function TodoObject(todo) {
	this.todo = todo;
	this.check = 'false';
}

var todos = [];

function addTodo(){
	var taskText = document.getElementById('newTask').value;
	var newTask = new TodoObject(taskText);
	todos.push(newTask);
	document.getElementById('newTask').value = '';

	var todoElement = document.getElementById('todoElement');
	var li = document.createElement('li');
	
	var checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.id = 'checkbox';
			li.appendChild(checkbox);

	var clear = document.createElement('span');
			clear.id = 'delete-ico'
			clearIcon = document.createTextNode('[X]');
			clear.appendChild(clearIcon);
	for (i = 0; i < todos.length; i++){
			var textNode = document.createTextNode(todos[i].todo);
		};
			li.appendChild(textNode);
			li.appendChild(clear);
			todoElement.appendChild(li);
			clear.addEventListener('click', function(){
				li.remove();
			});

			
			console.log(todos);
	};
			

var addButton = document.getElementById('add');
addButton.addEventListener('click', addTodo);

