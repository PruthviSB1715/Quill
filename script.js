function handleLogin(event){
    event.preventDefault();

    console.log("Simulating successful login...");

    window.location.href = 'dashboard.html';
}

document.addEventListener('DOMContentLoaded', ()=>{
    const loginForm = document.querySelector('.auth-form-container form');
    
    if(loginForm){
        loginForm.addEventListener('submit', handleLogin);
    }
});


//for register
function handleAuthForm(event){
    event.preventDefault();

    const form = event.currentTarget;

    if(form.action.includes('register')){
        console.log("Simulating successful registration...");
    }
    else{
        console.log("Simulating successful login...");
    }

    window.location.href = 'dashboard.html';
}

document.addEventListener('DOMContentLoaded', ()=>{
    const loginForm = document.querySelector('form[action="/api/v1/auth/login]');

    const registerForm = document.querySelector('form[action="/api/v1/auth/register]');

    if(loginForm){
        loginForm.addEventListener('submit', handleAuthForm);
    }

    if(registerForm){
        registerForm.addEventListener('submit', handleAuthForm);
    }
});