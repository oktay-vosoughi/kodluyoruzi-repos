let userName = prompt('enter your name')
let myName = document.getElementById('myName')
myName.innerHTML = userName

function showTime() {
    let d = new Date();

    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let myClock = document.getElementById('myClock')
    myClock.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${days[d.getUTCDay()]}`

    setTimeout(showTime, 1000);

}
showTime();