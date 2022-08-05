const text= 'Hi, My name is Halima Ali Wario';
const container= document.getElementById('container');
const button=document.getElementById("btn");

let index= 0;


function writeText(){
    container.innerText=text.slice(0,index);

    index++;

    if(index > text.length-1){
        index=0;
    }
}

button.addEventListener('click' ,()=>{
    setInterval(writeText,100);
});

