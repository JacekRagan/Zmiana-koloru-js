const hex = [ 0,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 , "A", 'B','C','D','E' ,'F'];

const zmien = document.getElementById("zmien");
const kolor = document.querySelector(".color");


zmien.addEventListener("click", function(){
let hexcolor = "#";
for (let i = 0; i<6; i++){
    hexcolor += hex[Math.floor(Math.random() * hex.length)];
    console.log(hexcolor);
}
kolor.textContent = hexcolor;
document.body.style.backgroundColor = hexcolor;
});