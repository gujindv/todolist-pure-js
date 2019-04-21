var app, todoList;

todoList = new TodoList('First List');
todoList.loadFromLocalStorage();
app = new TodoView(todoList);