// const clock = document.querySelector("#clock");

function liveClock(){
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${year}년 ${month}월 ${day}일 ${hour}:${minute}:${second}`
}

liveClock();
setInterval(liveClock, 1000);