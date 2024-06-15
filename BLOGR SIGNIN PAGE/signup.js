'use strict'

// ==selecting the elements
const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const email = document.getElementById('email')

// ===adding event listener to the form

form.addEventListener('submit',(e) => {
    e.preventDefault();
    validateInputs();
} )

// =validating the inputs 

const validateInputs = ()=> {
 
    // collecting the values of the elements
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    // /validating the inputs 

    // 1 validate username
    if (usernameValue === '') {
        console.log('username is required');
        
    } else {
       console.log('username submitted');
        
    }

    // validate email 
    if (emailValue === '') {
        console.log('email requirwd');
        
    } else {
        console.log('email submitted');
        
    }

    // / validate password
    if (passwordValue === '') {
        console.log('password required');
        
    } else {
        console.log('passowrd submitteed ');
        
    }

    // validate password2/
    if (password2Value === '') {
        console.log('password required');
        
    } else {
        console.log('passowrd submitted');
        
    }
}