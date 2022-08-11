const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// form submitted
form.addEventListener('submit', (e) => {
 e.preventDefault(); //ensures the form does not automaticall send the data
 checkinputs();
});

function checkinputs() {
 // get value from inputs
 const usernameValue = username.value.trim();
 const emailValue = email.value.trim();
 const passwordValue = password.value.trim();
 const password2Value = password2.value.trim();

 if (usernameValue === '') {
 //show error
  // add error class
  setErrorFor(username,'userName cannot be blannk');
 } else {
  //add success class
  setSuccessFor(username);
 }

 if (emailValue === '') {
 //show error
  // add error class
  setErrorFor(email,'Email cannot be blank');
 } else if (!isEmail(emailValue)) {
  setErrorFor(email, 'Email is not valid');
 } else {
  setSuccessFor(email);
 }

 if (passwordValue === '') {
 //show error
  // add error class
  setErrorFor(password,'Password cannot be blank');
 } else {
  //add success class
  setSuccessFor(password);
 }
 
  if (password2Value === '') {
 //show error
  // add error class
  setErrorFor(password2,'Password2 cannot be blank');
  } else if (password2Value !== passwordValue) {
   setErrorFor(password2, 'password does not match');
  }
  else {
  //add success class
  setSuccessFor(password2);
 }
 
 
}

function setErrorFor(input,message) {
 const formControl = input.parentElement;
 const small = formControl.querySelector('small');

 // add error message inside small
 small.innerText = message;

 // add error class
 formControl.className='form-control error';
}

function setSuccessFor(input) {
 const formControl = input.parentElement;
 formControl.className='form-control success';
}

// check validity of email
function isEmail(email) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}