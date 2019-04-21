function TodoItem(title) {
  this.title = title;
  this.pending = true;
  this.created_at = timeStamp();
}

TodoItem.buildItem = function(obj) {
  _item = new TodoItem(obj.title);
  _item.pending = obj.pending;
  _item.created_at = obj.created_at;

  return _item;
}

TodoItem.prototype.finish = function() {
  this.pending = false;
  this.container.saveToLocalStorage();
}

TodoItem.prototype.remove = function() {
  var list = this.container.list;
  var index = list.indexOf(this);
  if (index != -1) {
    list.splice(index, 1);
    this.container.saveToLocalStorage();
  }
}

TodoItem.prototype.setContainer = function(container) {
  this.container = container;
}

TodoItem.prototype.setDomNode = function(domNode) {
  this.domNode = domNode;
}
