const input=document.querySelector(".form input");
const button= document.querySelector(".form button");
const infoTxt= document.querySelector(".info-text");
let filterInput;

button.addEventListener("click", ()=>{
    // revrese input
    let reverseInput=filterInput.split("").reverse().join("");
    // basically split the string pr character into an array then revrse the array and join it per sting back to an array
    infoTxt.style.display="block"; //to unhide it
    // console.log(filterInput,reverseInput);
    if(filterInput!== reverseInput){
        return infoTxt.innerHTML= `No, <span> '${input.value}' </span> is not a palindrome!`;
    }
    infoTxt.innerHTML= `Yes, <span> '${input.value}' </span> is a palindrome!`;
});

input.addEventListener('keyup',()=> {
    // remove space from input
   filterInput=input.value.toLowerCase().replace(/\W/g, ""); 

    if(filterInput){
        return button.classList.add("active");
    }
    infoTxt.style.display="none"; //to hide it

    button.classList.remove("active");
});

// credits to codingNepal on youtube;