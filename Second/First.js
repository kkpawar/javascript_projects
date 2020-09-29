let array = ["pink","grey","orange","purple",];
let btn = document.querySelector(".btn");
let kkp = document.querySelector(".kkp");

btn.addEventListener("click", function () {
    let func = getrandomno();
   
    document.body.style.backgroundColor = array[func];


    kkp.textContent = array[func]; 
});     

function getrandomno()
{
    return Math.floor(Math.random() * array.length);
}
