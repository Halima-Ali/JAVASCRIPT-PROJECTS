var open= document.getElementById('openModal');
var modal=document.getElementById('modal-container');
var close=document.getElementById('closeModal');

// add event listener to the button
open.addEventListener('click',function (e) {
// once button is clicked we should show the modal screen;
    modal.classList.add('show');
});

close.addEventListener('click',function (e){
    // remove show class so that the modal's display is hidden
    modal.classList.remove('show');
});