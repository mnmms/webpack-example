import { currentTime } from './time';
import { message } from './text';
   
const root = document.getElementById("root");
const div = document.createElement("div");
const p = document.createElement("p");

root.appendChild(div);
root.appendChild(p);

 setInterval(() => div.innerText = currentTime(), 1000);
 p.appendChild(message);