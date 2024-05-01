// import './style.css';

// 追加ボタン
let IncompleteItemCount = 0;
let CompleteItemCount = 0;
let ItemCount = 0;
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

  // 編集
  const editButton = document.createElement('button');
  editButton.className = 'edit-button';
  editButton.innerText = "編集";
  editButton.addEventListener('click', () => {
    editButton.style.display = 'none';
    const editTarget = editButton.closest('div').parentElement.firstElementChild.lastElementChild;
    // const newText = prompt("Edit task?", editTarget.textContent);
    // editTarget.innerText = newText;
    const currentText = editTarget.innerText;
    const inputField = document.createElement('input');
    const saveButton = document.createElement('button');
    inputField.value = currentText;
    inputField.className = 'form-control'; 

    saveButton.className = 'btn btn-primary';
    saveButton.type = 'save';
    saveButton.innerText = 'Save';

    editTarget.replaceWith(inputField);
    inputField.after(saveButton); 

    saveButton.addEventListener('click', () => {
      const newText = inputField.value;
      if (newText === "") {
        alert("タスクを入力してください。");
        inputField.focus();
      } else {
        const newP = document.createElement('p');
        newP.className = 'todo-item';
        newP.innerText = newText;
        inputField.replaceWith(newP);
        saveButton.remove();
        editButton.style.display = 'inline-block';
      }
    })
  });

  // 削除
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.innerText = "削除";
  deleteButton.addEventListener('click', () => {
    let result = window.confirm('本当に削除してもよろしいですか');
    if (result) {
      const deleteTarget = deleteButton.closest('li');
      document.getElementById('todo-list').removeChild(deleteTarget);
      ItemCount -= 1;
      document.getElementById('todo-count').textContent = `全てのタスク数：${ItemCount}`;
      if (checkbox.checked) {
        CompleteItemCount -= 1;
        document.getElementById('complete-item-num').textContent = `To do 完了タスク数：${CompleteItemCount}`;
      } else {
        IncompleteItemCount -= 1;
        document.getElementById('todo-item-num').textContent = `To do 未完了タスク数：${IncompleteItemCount}`;
      }
      
    };
  });
  const buttonList = document.createElement('div');
  buttonList.className = 'button-list';
  buttonList.appendChild(editButton);
  buttonList.appendChild(deleteButton);
  div.appendChild(buttonList);

  list.appendChild(div); 
  document.getElementById('todo-list').appendChild(list);

  // 追加された時のアイテム数の変化
  ItemCount += 1;
  IncompleteItemCount += 1;
  document.getElementById('todo-item-num').textContent = `To do 未完了タスク数：${IncompleteItemCount}`;
  document.getElementById('todo-count').textContent = `全てのタスク数：${ItemCount}`;

  // チェックボックスをクリックした時
  checkbox.addEventListener('click',() => {
    if (checkbox.checked) {
      CompleteItemCount += 1;
      IncompleteItemCount -= 1;
      document.getElementById('todo-item-num').textContent = `To do 未完了タスク数：${IncompleteItemCount}`;
      document.getElementById('complete-item-num').textContent = `To do 完了タスク数：${CompleteItemCount}`;
    } else {
      CompleteItemCount -= 1;
      IncompleteItemCount += 1;
      document.getElementById('todo-item-num').textContent = `To do 未完了タスク数：${IncompleteItemCount}`;
      document.getElementById('complete-item-num').textContent = `To do 完了タスク数：${CompleteItemCount}`;
    }
    
  });
};

document.getElementById('button-addon2').addEventListener('click',onClickAdd);
