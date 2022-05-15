var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_verify);
password.addEventListener('textInput', pass_verify);


    function validated() {
    if(email.value.legth < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.legth < 9) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}
function email_verify(){
    if(email.value.legth >= 8) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
    }
}
function pass_verify(){
    if(password.value.legth >= 8) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
    }
}