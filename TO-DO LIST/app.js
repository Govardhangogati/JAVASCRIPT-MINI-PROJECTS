

function addTask() {
  let name = document.getElementById('name').value;
  let desc = document.getElementById('desc').value;
  let date = document.getElementById('date').value;

  if (!name || !desc || !date) return;

  let dt = new Date(date);
  let formattedDate = dt.toLocaleString('ISD', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  let newTask = { name, desc, date: formattedDate, completed: false };


  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  showTasks();

  document.getElementById('name').value = '';
  document.getElementById('desc').value = '';
  document.getElementById('date').value = '';
}

function showTasks() {
  let tasklist = document.getElementById('task-list');
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  

  if (tasks.length === 0) {
    tasklist.innerHTML = `
      <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?semt=ais_hybrid&w=740&q=80" width="250">
      <h3>No Tasks Today</h3>
      <p>Start adding new tasks</p>
    `;
    return;
  }

  tasklist.innerHTML = ''; 

  tasks.forEach(task => {
    let div = document.createElement('div');
    div.className = 'task';
    div.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''}>
      <div class="text ${task.completed ? 'completed' : ''}">
        <strong>${task.name}</strong>
        <small>${task.desc}</small>
        <span style="color:red">${task.date}</span>
      </div>
    `;

    

    

    if(tasklist.classList.contains('emptylist')){
    tasklist.classList.remove('emptylist')
    tasklist.innerHTML=''
  }

    let cb = div.querySelector('input[type="checkbox"]');
    let text = div.querySelector('.text');
    cb.addEventListener('change', () => {
        if(cb.checked){
            text.classList.toggle('completed')
        }
        else{
            text.classList.remove('completed')
        }
    });

    tasklist.appendChild(div);
  });
  
}


window.onload = showTasks;



