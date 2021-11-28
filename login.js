const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function userLogin(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);    
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `Welcome ${username} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    // show login-form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", userLogin);
}else {
    // show greeting
    paintGreeting(saveUsername);
}

