function editItem(editButton) {
  editButton.style.display = 'none';
  const editTarget = editButton.closest('div').parentElement.firstElementChild.lastElementChild;
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
}

function deleteItem(deleteArgs) {
  let result = window.confirm('本当に削除してもよろしいですか');
    if (result) {
      const deleteTarget = deleteArgs.deleteButton.closest('li');
      document.getElementById('todo-list').removeChild(deleteTarget);
      totalItemCount -= 1;
      deleteArgs.totalItemCountEl.textContent = `全てのタスク数：${totalItemCount}`;
      if (deleteArgs.checkbox.checked) {
        CompleteItemCount -= 1;
        deleteArgs.completeItemCountEl.textContent = `To do 完了タスク数：${CompleteItemCount}`;
      } else {
        IncompleteItemCount -= 1;
        deleteArgs.incompleteItemCountEl.textContent = `To do 未完了タスク数：${IncompleteItemCount}`;
      }
      
    };
}

function changeItemStatus(checkbox,incompleteItemCountEl,completeItemCountEl) {
  if (checkbox.checked) {
    CompleteItemCount += 1;
    IncompleteItemCount -= 1;
    incompleteItemCountEl.textContent = `To do 未完了タスク数：${IncompleteItemCount}`;
    completeItemCountEl.textContent = `To do 完了タスク数：${CompleteItemCount}`;
  } else {
    CompleteItemCount -= 1;
    IncompleteItemCount += 1;
    incompleteItemCountEl.textContent = `To do 未完了タスク数：${IncompleteItemCount}`;
    completeItemCountEl.textContent = `To do 完了タスク数：${CompleteItemCount}`;
  }
}
