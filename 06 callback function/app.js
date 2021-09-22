// const todos = [
//     { title: "First todo", body: "This is first todo" },
//     { title: "Second todo", body: "This is third todo" }
// ]

// function createTodo(todo, callback) {
//     setTimeout(function () {
//         todos.push(todo)
//         callback()
//     }, 2000)
// }

// function getTodos() {
//     setTimeout(() => {
//         let output = ''
//         todos.forEach(function (todo) {
//             output += `<li>${todo.title}</li>`
//         })
//         document.body.innerHTML = output
//     }, 1000)
// }

// createTodo({ title: 'Third todo', body: "This is third todo" }, getTodos)


const todos = [
    {
        title: "First Todo",
        body: "this is first todo"
    },
    {
        title: "Second Todo",
        body: "this is second todo"
    }
]

/*
    tentang kode di bawah
    kode di jalankan secara asynchronus dalam hal ini function create todo memiliki settimeout serta 
    callback function yang akan dijalakan di dalam program setelah 2 detik running program
    dalam hal ini maka function getTodo dulu yang dijalankan karena tidak memiliki distrupsi dalam waktu pengerjaannya

    lalu callback ini sendiri dijalankan untuk memanggil kembali function getTodo agar data todo dapat di perbarui
    berdasarkan data yang telah di perbarui di callback function yang tersimpan di create todo
*/
function createTodo(todo, callback){
    setTimeout(function(){
        todos.push(todo)
        callback()
    }, 2000)
}

function getTodo(){
    setTimeout(() => {
        let output = '';
        todos.forEach(function(todo){
            output += `<li>${todo.title}</li>`
        })
        document.body.innerHTML = output
    })
}

function alerta(){
    alert('Coding ');
}
createTodo({title: 'Third Todo', body: 'This is third todo'}, getTodo);
getTodo()
alerta()