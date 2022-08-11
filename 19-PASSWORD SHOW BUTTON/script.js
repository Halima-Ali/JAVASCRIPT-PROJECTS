const password = document.querySelector("input");
const show_btn = document.getElementById('show');
const hide_btn = document.getElementById('hide');
const container = document.querySelector("span");


show_btn.addEventListener('click', () => {
 if (password.type === 'password') {
  password.type = "text";
  container.classList.add("active");
 }
});

hide_btn.addEventListener('click', () => {
 if(password.type !== 'password'){
  password.type = "password";
  container.classList.remove("active");
  console.log('yeah');
 }
})

console.log(container.className);