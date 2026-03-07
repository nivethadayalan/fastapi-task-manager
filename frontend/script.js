const API = "http://127.0.0.1:8000";

function register() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch(`${API}/auth/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password})
    })
    .then(res => res.json())
    .then(data => {
        alert("User registered!");
        window.location.href = "login.html";
    });
}


function login(){

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch(`${API}/auth/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({username,password})
    })
    .then(res=>res.json())
    .then(data=>{
        localStorage.setItem("token",data.access_token);
        window.location.href="index.html";
    });
}


function createTask(){

    const title=document.getElementById("title").value;
    const description=document.getElementById("description").value;

    const token=localStorage.getItem("token");

    fetch(`${API}/tasks/`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+token
        },
        body:JSON.stringify({title,description})
    })
    .then(res=>res.json())
    .then(()=>{
        loadTasks();
    });

}


function loadTasks(){

    const token=localStorage.getItem("token");

    fetch(`${API}/tasks/`,{
        headers:{
            "Authorization":"Bearer "+token
        }
    })
    .then(res=>res.json())
    .then(tasks=>{

        const list=document.getElementById("taskList");
        list.innerHTML="";

        tasks.forEach(task=>{

            const li=document.createElement("li");

            li.innerHTML=`
            <b>${task.title}</b> - ${task.description}
            <button onclick="deleteTask(${task.id})">Delete</button>
            `;

            list.appendChild(li);

        });

    });

}


function deleteTask(id){

    const token=localStorage.getItem("token");

    fetch(`${API}/tasks/${id}`,{
        method:"DELETE",
        headers:{
            "Authorization":"Bearer "+token
        }
    })
    .then(()=>{
        loadTasks();
    });

}


function logout(){

    localStorage.removeItem("token");
    window.location.href="login.html";

}


if(window.location.pathname.includes("index.html")){
    loadTasks();
}