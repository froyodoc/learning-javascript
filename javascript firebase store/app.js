// Import the functions you need from the SDKs you need
      

      
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBkVHryFOsW2qp4khOil1DBd0NcnMN1gmU",

  authDomain: "todolist-d3930.firebaseapp.com",

  projectId: "todolist-d3930",

  storageBucket: "todolist-d3930.appspot.com",

  messagingSenderId: "943109119425",

  appId: "1:943109119425:web:eb8b09f5bfed1f68606340"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.collection('todos').orderBy('title').onSnapshot(snapshot => {
let changes = snapshot.docChanges()
// console.log(changes)
changes.forEach(change => {
    if (change.type == 'added') {
        renderList(change.doc)
    } else if (change.type == 'removed') {
        let li = todoList.querySelector(`[data-id=${change.doc.id}]`);
        todoList.removeChild(li);
    } else if (change.type == 'modified') {
        let li = todoList.querySelector(`[data-id=${change.doc.id}]`);
        li.getElementsByTagName('span')[0].textContent = newTitle;
        newTitle = '';
    }
    });
});


const todoList = document.querySelector('#todo-list');
const form = document.querySelector('#add-todo-form');
const updateBtn = document.querySelector('#update');
let newTitle = '';
let updateId = null;

function renderList(doc){
    let li = document.createElement('li');
    li.className = "collection-item";
    li.setAttribute('data-id', doc.id);
    let div = document.createElement('div');
    let title = document.createElement('span');
    title.textContent = doc.data().title;
    let anchor = document.createElement('a');
    anchor.href = "#modal1";
    anchor.className = "modal-trigger secondary-content";
    let editBtn = document.createElement('i');
    editBtn.className = "material-icons";
    editBtn.innerText = "edit";
    let deleteBtn = document.createElement('i');
    deleteBtn.className = "material-icons secondary-content";
    deleteBtn.innerText = "delete";
    anchor.appendChild(editBtn);
    div.appendChild(title);
    div.appendChild(deleteBtn);
    div.appendChild(anchor);
    li.append(div);
    deleteBtn.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('data-id');
        db.collection('todos').doc(id).delete();
    })
    editBtn.addEventListener('click', e => {
        updateId = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');

    })
    todoList.append(li);
}

updateBtn.addEventListener('click', e=> {
    newTitle = document.getElementsByName('newTitle')[0].value;
    db.collection('todos').doc(updateId).update({
        title: newTitle
    });
});

form.addEventListener('submit', e=> {
    e.preventDefault();
    db.collection('todos').add({
        title: form.title.value
    });
    form.title.value='';
});