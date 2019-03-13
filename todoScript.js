function TodoObject(todo) {
	this.todo = todo;
	check = 'false';
}

var todos = [];

// Добавление элемента в список
function addTodo(){
	var taskText = document.getElementById('newTask').value;
	var newTask = new TodoObject(taskText);
	todos.push(newTask);
	document.getElementById('newTask').value = '';

//Создание элемента списка
	var todoElement = document.getElementById('todoElement');
	var li = document.createElement('li');
			li.className = 'li';

//Создание checkbox
	var checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.className = 'checkbox';

//Присваивание свойству объекта check значения checkbox
			checkbox.oninput = function () {
		if (checkbox.checked == true){
			newTask.check = 'true';
		}
	}

			li.appendChild(checkbox);

//Создание кнопки "Удалить"
	var clear = document.createElement('span');
			clear.id = 'delete-ico'
			clearIcon = document.createTextNode('[X]');
			clear.appendChild(clearIcon);

//Присваивание значения input элементу списка
	for (i = 0; i < todos.length; i++){
			var textNode = document.createTextNode(todos[i].todo);
		};
			li.appendChild(textNode);
			li.appendChild(clear);
			todoElement.appendChild(li);

//Удаление элемента по клику на кнопку
			clear.addEventListener('click', function(){
				li.remove();
			});
	};

var addButton = document.getElementById('add');
addButton.addEventListener('click', addTodo);


var deleteSelectedButton = document.getElementById('delete');
deleteSelectedButton.addEventListener('click', deleteSelected);

//Функция множественного удаления
function deleteSelected() {
	var li = document.querySelectorAll('.li');
  var arr = [...li];

	[...todos].forEach(function(todo, i){
		if (todo.check == 'true'){
			todos.splice(i, 1);
			arr[i].remove();
		} 
	})
};
