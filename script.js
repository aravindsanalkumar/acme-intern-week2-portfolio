let name_text;
let email_text;
let subject_text;
let message_text;
let message_warning;



// console.log(name_text.value);
// console.log(email_text.value);
// console.log(subject_text.value);
// console.log(message_text.value);
// console.log(msg_warning.value);

let message = '';


function checkFunction(){
    let isValid = true;

    name_text = document.getElementById('name_text');
    email_text = document.getElementById('email_text');
    subject_text = document.getElementById('subject_text');
    message_text = document.getElementById('message_text')
    msg_warning = document.getElementById('msg_warning');

    msg_warning.innerText = '';


    console.log(email_text.value);

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    

    if(name_text.value === ''){
        message = "->Name is required";
        isValid = false;
    }
    if(email_text.value === '' ){
        message += "->Valid email required";
        isValid = false;
    }
    else if(!email_text.value.match(validRegex)){
        message += '-> Invalid Email address';
        isValid = false;
    }
    if(subject_text.value === ''){
        message += '-> Valid Subject content required';
        isValid = false;
    }
    if(message_text.value === ''){
        message += '-> Valid Message required';
        isValid = false;
    }
    if(isValid === false){
        msg_warning.innerText = message;
    }
    else{
        msg_warning.innerText = "Message has been send";
        subject_text.value = '';
        name_text.value = '';
        email_text.value = '';
        message_text.value = '';
    }


}