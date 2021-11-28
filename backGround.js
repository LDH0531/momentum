const images = ["0001.jpeg", "0002.jpeg", "0003.jpeg"];

const randomImage = images[Math.floor(Math.random() * images.length)];
const bgimg = document.createElement("div");

bgimg.classList.add("background-container");
const bgImage = document.createElement("img");
const login = document.querySelector("#login-form");
const todo = document.querySelector("#todo-form");
const title = document.querySelector("#greeting");
const clock = document.querySelector("#clock");
const quote = document.querySelector("#quote");
const weather = document.querySelector("#weather");
const list = document.querySelector("#todo-list");

bgimg.appendChild(bgImage);
bgimg.appendChild(todo);
bgimg.appendChild(list);
bgimg.appendChild(login);
bgimg.appendChild(title);
bgimg.appendChild(clock);
bgimg.appendChild(quote);
bgimg.appendChild(weather);


bgImage.src = `img/${randomImage}`;

document.body.prepend(bgimg);

