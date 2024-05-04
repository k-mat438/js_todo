// import './style.css';

// 追加ボタン
let IncompleteItemCount = 0;
let CompleteItemCount = 0;
let totalItemCount = 0;
const onClickAdd = () => {
  const inputText = document.getElementById('add-text').value;
  if (inputText == "") {
    alert("タスクを入力してください");
    return;
  }
  document.getElementById('add-text').value = "";
  const list = document.createElement('li');
  const div = document.createElement('div');
  div.className = 'list-row';
  const p = document.createElement('p');
  p.className = 'todo-item';
  p.innerText = inputText;
  const todo = document.createElement('div');
  todo.className = 'todo-col';
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type','checkbox');
  todo.appendChild(checkbox);
  todo.appendChild(p);
  div.appendChild(todo);

  // 追加された時のアイテム数の変化
  totalItemCount += 1;
  IncompleteItemCount += 1;
  const totalItemCountEl = document.getElementById('total-todo-count');
  const completeItemCountEl = document.getElementById('complete-item-count');
  const incompleteItemCountEl = document.getElementById('incomplete-item-count');
  incompleteItemCountEl.textContent = `To do 未完了タスク数：${IncompleteItemCount}`;
  totalItemCountEl.textContent = `全てのタスク数：${totalItemCount}`;
  
  // 編集
  const editButton = document.createElement('button');
  editButton.className = 'edit-button';
  editButton.innerText = "編集";
  editButton.addEventListener('click', () => editItem(editButton));

  // 削除
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.innerText = "削除";
  const deleteArgs = { deleteButton, checkbox, totalItemCountEl, completeItemCountEl, incompleteItemCountEl };
  deleteButton.addEventListener('click', () => deleteItem(deleteArgs));

  const buttonList = document.createElement('div');
  buttonList.className = 'button-list';
  buttonList.appendChild(editButton);
  buttonList.appendChild(deleteButton);
  div.appendChild(buttonList);

  list.appendChild(div); 
  document.getElementById('todo-list').appendChild(list);
  
  // チェックボックスをクリックした時
  checkbox.addEventListener('click',() => changeItemStatus(checkbox,incompleteItemCountEl,completeItemCountEl));
};

document.getElementById('button-addon2').addEventListener('click',onClickAdd);
