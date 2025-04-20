const clock = document.getElementById("clock");
/*
setInterval(() => {
    let date = new Date();
    clock.innerHTML=(date.toLocaleTimeString());
},1000);
*/
setInterval(() => {
    const date = new Date();
  
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? "PM" : "AM";
  
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
  
    clock.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;
  }, 1000);
/*
const time = new Date();
console.log(time.getHours())
console.log(time.getMinutes())
console.log(time.getSeconds())
console.log(time.getMilliseconds())
console.log(time.getDay())
console.log(time.getDate())
console.log(time.getMonth())
console.log(time.getFullYear())
console.log(time.toLocaleTimeString())
console.log(time.getTimezoneOffset())
console.log(time.get)
*/