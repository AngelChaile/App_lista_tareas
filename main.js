let IdCounter = 0;
const input = document.querySelector(`input[type="text"]`);

userInput.addEventListener('submit', (event)=>{
    event.preventDefault();
    addTask();
});

let addTask = ()=>{
    IdCounter++;

    let newValue = input.value;

    list.innerHTML += `
    <div class="task-container" id="${IdCounter}" >
        <label>
            <input type="checkbox">
            ${newValue}
        </label>
        <img src="./img/basurero.png" alt="basurero" class="closeBtn">
    </div> `
    input.value = '';
    updateStats();
};

list.addEventListener('click', (event)=>{
    if(event.srcElement.nodeName == 'INPUT') updateStats();
    else if(event.srcElement.nodeName == 'IMG') deleteTask(event.srcElement.parentNode.id);
})

function updateStats() {
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `<p>Tareas pendientes: ${element.length} Completadas: ${checkbox.length}</p>`;
}

let deleteTask = (id) =>{
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
}
