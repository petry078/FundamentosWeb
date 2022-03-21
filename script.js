let yourName = document.querySelector('#yourName')
let email = document.querySelector('#email')
let subject = document.querySelector('#subject')

let yourNameOk = false;
let emailOk = false;
let subjectOk = false;

function validName() {
    let txt = document.querySelector('#txtName')
    if (yourName.value.length < 3) {
        txt.innerHTML = 'Name must have 3 or more characters.'
        txt.style.color = 'red'
   } else {
        txt.innerHTML = 'Ok!'
        txt.style.color = 'black'
        let yourNameOk = true;    
    }
}

function validEmail() {
    let txt = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1) {
        txtEmail.innerHTML = "Please, insert a valid e-mail."
        txt.style.color = 'red'
    } else {
        txt.innerHTML = "Ok!"
        txt.style.color = 'black'
        let emailOk = true;     
    }
}

function validSubject() {
    let txt = document.querySelector("#txtSubject")
    if (subject.value.length > 100) {
        txt.innerHTML = "Subject must have less tham 100 characters"
        txt.style.color = 'red'
    } else {
        txt.innerHTML = "Ok!" 
        txt.style.color = 'black'
        let subjectOk = true;    
    }
}

function send() { //Não funciona: não entra no if, imprime apenas o alerta do else//
    if (yourNameOk == true && emailOk == true && subjectOk == true) {
        alert ("Sent!")
    } else {
        alert ("Please, fill the form correctly. Thank you!")
    }
}te
