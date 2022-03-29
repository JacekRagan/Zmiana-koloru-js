const color = ["red","blue","#000000",'purple'];

let przycisk = document.getElementById("zmien");
let kolor = document.querySelector('.color');

przycisk = addEventListener("click", function(){
    let liczba = random();
    document.body.style.backgroundColor = color[liczba];
    kolor.textContent = color[liczba];
    console.log(liczba);
});

function random(){
    return Math.floor(Math.random() * color.length);
}