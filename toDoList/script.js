
const button = document.getElementById('button')
const todo = document.getElementById('todo')
const userInput = document.getElementById('userInput')
const form = document.getElementById('form')
let todoList = []




const addTodo = () =>{
    var newTodo = userInput.value
    if (!newTodo) return console.log("No value!") || alert("No value")
    todoList.push({
        text: newTodo,
        completed: false
    })

    localStorage.setItem("todo", JSON.stringify(todoList))
    render()

}



const render = () =>{
    todo.innerHTML = null
    // todoList = JSON.parse(localStorage.getItem("todo")) || []
    console.log(todoList)

    for (let i= 0; i < todoList.length; i++ ){
        let li = document.createElement('li')
        todo.appendChild(li)
        li.innerHTML = `${todoList[i].text}
        `

        let div = document.createElement('div')

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'

        let button = document.createElement('button')
        let text = document.createTextNode('X')
        button.classList('')

        button.append(text)
        div.append(checkbox)
        div.append(button)
        li.append(div)


        checkbox.addEventListener('click', (event)=> {
            todoList[i].completed = event.target.checked
        })

 
        
    }
}




form.addEventListener('submit', (event)=>{
    event.preventDefault()

    addTodo()

})


