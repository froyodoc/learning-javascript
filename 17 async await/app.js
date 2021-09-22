
// const message = async () => 'You have new message'


// message().then(res => console.log(res))

// const getTodos = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/toidos')

//     if (res.ok) {
//         const data = await res.json()
//         return data

//     } else {
//         throw new Error('Something went wrong')
//     }



// }

// getTodos().then(todos => console.log(todos)).catch(err => console.log(err))

const message = async () => 'You have new message'

message().then(response => console.log(response))

const getTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')

    const data = await res.json()
    return data
}

getTodos().then(todos=>console.log(todos))

console.log("me")