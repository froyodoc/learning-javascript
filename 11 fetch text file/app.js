document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJSON)
document.getElementById('button3').addEventListener('click', getAPI)


function getText() {
    fetch('test.txt').then(function (res) {
        return (res.text())
    }).then(function (data) {
        document.getElementById('output').innerText = data
    }).catch(function (err) {
        console.log('ERROR: ' + err)
    })
}

function getJSON(){
    fetch('todos.json').then(function(response){
        return(response.json());
    }).then(function(todos){
        let output = '';
        todos.forEach(todo=>{
            output += `<li>${todo.title}</li>`
        })
        document.getElementById('output').innerHTML = output
    }).catch(function(error){
        console.log(error);
    })
}

function getAPI(){
    fetch('https://jsonplaceholder.typicode.com/todos').then(function(response){
        return (response.json());
    }).then(function(todos){
        let output = '';
        todos.forEach(todo=>{
            output += `<li>${todo.title}</li>`
        })
        document.getElementById('output').innerHTML = output
    }).catch(function(error){
        console.log(error);
    })
}