function TodoView(myList) {
  this.myList = myList;
  this.pendingListNode = document.querySelector('.pending-list-container .pending-list');
  this.finishedListNode = document.querySelector('.finished-list-container .finished-list');
  this.pendingListContainer = document.querySelector('.pending-list-container');
  this.finishedListContainer = document.querySelector('.finished-list-container');
  this.taskInput = document.querySelector('.pending-list-container .task-input');

  for(var i = 0; i < myList.list.length; i++) {
    var item = myList.list[i];
    if (item.pending) {
      this.pendingListNode.appendChild(new ItemDom(item).pendingDomItem());
    } else {
      this.finishedListNode.appendChild(new ItemDom(item).finishedDomItem());
    }
  }
  
  this.toggleView();
  this.bond();
} 

TodoView.prototype.bond = function() {
  document.getElementById('btn-add-task').addEventListener('click', this.addTaskListener.bind(this));
  document.getElementById('btn-show-finished').addEventListener('click', this.toggleView.bind(this));
  document.getElementById('btn-return-pending').addEventListener('click', this.toggleView.bind(this));
  this.taskInput.addEventListener('keydown', this.addTaskListener.bind(this));
}

TodoView.prototype.addTaskListener = function(event) {
  if (event.type == 'click' || (event.type == 'keydown' && event.key == 'Enter')) {
    var title = this.taskInput.value;
    if (title.length == 0) {
      alert('内容不能为空');
    } else {
      var item = new TodoItem(title);
      this.myList.addTask(item);
      
      var li = new ItemDom(item).pendingDomItem();
      this.pendingListNode.appendChild(li);
      this.taskInput.value = '';
    }
  }
}

TodoView.prototype.toggleView = function() {
  if (this._state == 'pending') {
    this.pendingListContainer.classList.add('hidden');
    this.finishedListContainer.classList.remove('hidden');
    this._state = 'finished';
  } else {
    this.finishedListContainer.classList.add('hidden');
    this.pendingListContainer.classList.remove('hidden');
    this._state = 'pending';
  }
}
