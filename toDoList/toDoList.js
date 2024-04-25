var toDoList = document.getElementById('to-do-list')
const clear = document.getElementById('clear')
const submit = document.getElementById('submit')
var toDoListBox = document.getElementById('task-container')

var database = []



var showTask = (userInput)=>{



    var task = document.createElement('div')
    task.className = 'task'



    let userTask = document.createElement('div')
    let completed = document.createElement('button')
    completed.className = 'completed'
    let remove = document.createElement('button')
    remove.className = 'remove'
    
    userTask.innerHTML = userInput
    completed.innerHTML = 'V'
    remove.innerHTML = 'X'





    toDoListBox.appendChild(task)
    task.appendChild(userTask)
    task.appendChild(completed)
    task.appendChild(remove)

    


}

submit.addEventListener('click', (event)=>{

    event.preventDefault()

    let userInput = document.getElementById('user-input').value
    if (!userInput){
        alert('Enter something')
    }

    else{
        showTask(userInput)
    }


    

})


clear.addEventListener('click', ()=>{
    toDoListBox.innerHTML = ''
})


var EditTask = document.querySelector('#task-container')

EditTask.addEventListener('click', (event)=>{
    if (event.target.classList.contains('remove')) {
        let task = event.target.closest('.task')
       EditTask.removeChild(task);
    }
    else{
        if(event.target.classList.contains('completed')){
            let task = event.target.closest('.task')
            let text = task.querySelector('div')
            text.style.textDecoration = 'line-through';
        }     
        }
    }
)





