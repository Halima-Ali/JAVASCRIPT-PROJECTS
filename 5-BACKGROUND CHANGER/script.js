const btn= document.getElementById('btn');
const colour= document.getElementById('colour');

btn.addEventListener("click",()=>{
    document.body.style.background=changeColour();
    // colour.style.display= 'block';
    colour.innerHTML= `The background colour in hsl is ${changeColour()}`;
    console.log(changeColour());
});


// function
function changeColour(){
    return `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`;
}

