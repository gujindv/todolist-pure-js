function TodoList(name) {
  this.list = [];
  this.name = name;
}

TodoList.prototype.addTask = function(item) {
  item.setContainer(this);
  this.list.push(item);
  this.saveToLocalStorage();
};

TodoList.prototype.saveToLocalStorage = function() {
  var plainList = [];
  for(var i = 0; i < this.list.length; i++) {
    plainList.push({
      "title": this.list[i].title,
      "pending": this.list[i].pending,
      "created_at": this.list[i].created_at
    });
  };

  localStorage.setItem(this.name, JSON.stringify(plainList));
  return this;
}

TodoList.prototype.loadFromLocalStorage = function() {
  var plainList = JSON.parse(localStorage.getItem(this.name) || '[]');
  this.list = [];
  for(var i = 0; i < plainList.length; i++) {
    var item = TodoItem.buildItem(plainList[i]);
    item.setContainer(this);
    this.list.push(item);
  }

  return this;
}