let todoList = [];

function showList(filterType) { 
    const todoListContainer = document.getElementById('list');
    todoListContainer.innerHTML = '';

    let filteredList = todoList;
    if (filterType === 'complete') {
        filteredList = todoList.filter(item => item.completed);
    } else if (filterType === 'no_complete') {
        filteredList = todoList.filter(item => !item.completed);
    }

   filteredList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" ${item.completed ? 'checked' : ''} onchange="toggleComplete(${item.id})">
            <span contenteditable="true" oninput="updateItem(${item.id}, this.innerText)">${item.text}</span>
            <span>${item.priority}</span>
        `;
        todoListContainer.appendChild(listItem);
    });
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('selected');
        if (button.id === filterType) {
            button.classList.add('selected');
        }
    });
}



function addItem() {
    const newItemText = document.getElementById('item').value;
    const newItemPriority = document.querySelector('input[name="priority"]:checked');
    if (!newItemText) { alert('할 일을 입력해주세요!'); return; }
    if (!newItemPriority) { alert('우선 순위를 선택해주세요!'); return; }

    const newItem = { 
        id: Date.now(), text: newItemText, priority: newItemPriority.value, completed: false
    };

    todoList.push(newItem);
    showList('alllist');
    document.getElementById('item').value = '';
}


function updateItem(id, newText) { 
    const index = todoList.findIndex(item => item.id === id); 
    todoList[index].text = newText;
}


function toggleComplete(id) {
    const index = todoList.findIndex(item => item.id === id);
    todoList[index].completed = !todoList[index].completed; 
    showList('alllist');
}


function filterTodoList(filterType) {
    showList(filterType);
}

showList('alllist');