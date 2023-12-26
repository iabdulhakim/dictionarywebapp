const body = document.querySelector("body");
const darkBtn = document.querySelector("#dark-m");
const lightBtn = document.querySelector("#light-m");

darkBtn.addEventListener("click", ()=> {
    body.classList.add(".dark");
    body.classList.remove(".light");
});

lightBtn.addEventListener("click", ()=> {
    body.classList.add(".light");
    body.classList.remove(".dark");
});


// const toggle = document.getElementById('dark-m');
// const body = document.querySelector('body');

// toggle.addEventListener('click', function(){
//     this.classList.toggle()
// })