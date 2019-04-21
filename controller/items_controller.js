// function pendingDomItem(item) {
//   var domItem = document.createElement('li');
//   domItem.className = 'list-item';
  
//   item.setDomNode(domItem);

//   var checkbox = document.createElement('input');
//   checkbox.type = 'checkbox';
//   checkbox.addEventListener('click', checkTaskListener(item));

//   var title = document.createElement('span');
//   title.textContent = item.title;

//   var time = document.createElement('span');
//   time.textContent = item.created_at;

//   var deleteBtn = document.createElement('button');
//   deleteBtn.type = 'button';
//   deleteBtn.textContent = 'X';
//   deleteBtn.addEventListener('click', removeTaskListener(item));

//   domItem.appendChild(checkbox);
//   domItem.appendChild(title);
//   domItem.appendChild(time);
//   domItem.appendChild(deleteBtn);

//   return domItem;
// }

// function finishedDomItem(item) {
//   var domItem = document.createElement('li');
//   domItem.className = 'list-item';

//   item.setDomNode(domItem);

//   var title = document.createElement('span');
//   title.textContent = item.title;

//   var time = document.createElement('span');
//   time.textContent = item.created_at;

//   var deleteBtn = document.createElement('button');
//   deleteBtn.type = 'button';
//   deleteBtn.textContent = 'X';
//   deleteBtn.addEventListener('click', removeTaskListener(item));

//   domItem.appendChild(title);
//   domItem.appendChild(time);
//   domItem.appendChild(deleteBtn);

//   return domItem;
// }

// function checkTaskListener(item) {
//   return function() {
//     setTimeout(function() {
//       item.finish();
//       item.domNode.parentNode.removeChild(item.domNode);

//       var li = finishedDomItem(item);
//       document.querySelector('.finished-list-container .finished-list').appendChild(li);
//     }, 400);
//   }
// }

// function removeTaskListener(item) {
//   return function() {
//     setTimeout(function() {
//       item.remove();
//       item.domNode.parentNode.removeChild(item.domNode);
//     }, 400);
//   }
// }

function ItemDom(item) {
  this.item = item;
}

ItemDom.prototype.pendingDomItem = function() {
  var domItem = document.createElement('li');
  domItem.className = 'list-item';
  
  this.item.setDomNode(domItem);

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('click', this.checkTaskListener(this.item));

  var title = document.createElement('span');
  title.textContent = this.item.title;

  var time = document.createElement('span');
  time.textContent = this.item.created_at;

  var deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', this.removeTaskListener(this.item));

  domItem.appendChild(checkbox);
  domItem.appendChild(title);
  domItem.appendChild(time);
  domItem.appendChild(deleteBtn);

  return domItem;
}

ItemDom.prototype.finishedDomItem = function() {
  var domItem = document.createElement('li');
  domItem.className = 'list-item';

  this.item.setDomNode(domItem);

  var title = document.createElement('span');
  title.textContent = this.item.title;

  var time = document.createElement('span');
  time.textContent = this.item.created_at;

  var deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', this.removeTaskListener(this.item));

  domItem.appendChild(title);
  domItem.appendChild(time);
  domItem.appendChild(deleteBtn);

  return domItem;
}

ItemDom.prototype.checkTaskListener = function(item) {
  return function() {
    setTimeout(function() {
      item.finish();
      item.domNode.parentNode.removeChild(item.domNode);

      var li = new ItemDom(item).finishedDomItem();
      document.querySelector('.finished-list-container .finished-list').appendChild(li);
    }, 400);
  }
}

ItemDom.prototype.removeTaskListener = function(item) {
  return function() {
    setTimeout(function() {
      item.remove();
      item.domNode.parentNode.removeChild(item.domNode);
    }, 400);
  }
}