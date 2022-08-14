const form = document.getElementById('form');
const userename = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//add events
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate()
})
const sendData = (userenameVal, sRate, count) => {
    if(sRate === count)
    // alert("Registration successfull.")
    swal("Welcome! " + userenameVal, "Registration Successful", "success");
}
//Final data validate 
const successMsg = (userenameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for(var i = 0; i < formCon.length; i++){
        if(formCon[i].className === "form-control success"){
            var sRate = 0 + i;
            sendData(userenameVal, sRate, count);
        }else{
            return false;
        }
    }
}
//More email validate
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 3) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}
//define validate function

const validate = () => {
    const userenameVal = userename.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    //validate username
    if(userenameVal === ""){
        setErrorMsg(userename, 'Username can not be blank.');
    }else if(userenameVal.length <= 2){
        setErrorMsg(userename, 'Username min 3 characters.');
    }else{
        setSuccessMsg(userename);
    }

    //validate email address
    if(emailVal === ""){
        setErrorMsg(email, 'email can not be blank.');
    }else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Not a valid Email.');
    }else{
        setSuccessMsg(email);
    }

    //validate phone
    if(phoneVal === ""){
        setErrorMsg(phone, 'phone can not be blank.');
    }else if(phoneVal.length != 10){
        setErrorMsg(phone, 'Not a valid phone number.');
    }else{
        setSuccessMsg(phone);
    }

    //validate password
    if(passwordVal === ""){
        setErrorMsg(password, 'Password can not be blank.');
    }else if(passwordVal.length <= 5){
        setErrorMsg(password, 'Minimum 6 character required.');
    }else{
        setSuccessMsg(password);
    }

    //validate confirm password
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'Confirm Password can not be blank.');
    }else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'Passsword must be same.');
    }else{
        setSuccessMsg(cpassword);
    }
    successMsg(userenameVal);
}
function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}