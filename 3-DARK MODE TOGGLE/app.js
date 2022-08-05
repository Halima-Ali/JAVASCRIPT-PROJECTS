const checkbox= document.getElementById("chk");
const root= document.querySelector(":root");

checkbox.addEventListener('change',()=>{
    root.classList.toggle("dark-theme");
})