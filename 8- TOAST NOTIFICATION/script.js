const btn= document.getElementById("btn");
const notification= document.getElementById("notification");


btn.addEventListener('click', ()=>{
    createNotification();
});

function createNotification(){
    const notif= document.createElement('div');

    notif.classList.add('toast');
    notif.innerHTML="What's good?";
    notification.appendChild(notif);

    // remove notif after a while
    setTimeout(()=>{
        notif.remove();
    },3000)
}