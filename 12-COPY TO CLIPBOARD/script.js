const myInput = document.getElementById('myInput');
const btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function () {
 // step 1 -select text using select 
 myInput.select();

 // copy the text
 // execCommand

 document.execCommand('Copy'); 

}