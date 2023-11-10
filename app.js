const code = document.getElementById("password");
const progressBar = document.getElementById("myBar");
const display = document.getElementsByClassName("textbox")[0];

let progress = 0;

code.addEventListener("keyup", function () {
    if (code.value.length === 0) {
        progress = 0;
        progressBar.style.width = "0%";
        display.innerHTML = ""; 
    } else {
        checkpassword(code.value);
    }
});

function updateProgressBar() {
    progressBar.style.width = progress + "%";
    
    if (progress < 25) {
        progressBar.style.backgroundColor = "Red"; 
    } else if (progress < 50) {
        progressBar.style.backgroundColor = "Orange"; 
    } else if (progress < 75) {
        progressBar.style.backgroundColor = "Yellow"; 
    } else {
        progressBar.style.backgroundColor = "Green"; 
    }
}

function checkpassword(password) {
    var lengthValid = password.length >= 8;
    var hasUpperCase = /[A-Z]+/.test(password);
    var hasLowerCase = /[a-z]+/.test(password);
    var hasNumber = /[0-9]+/.test(password);
    var hasSpecialChar = /[$@#&!]+/.test(password);

    var strength = 0;

    if (lengthValid) {
        strength += 1;
    }
    if (hasUpperCase && hasLowerCase) {
        strength += 1;
    }
    if (hasNumber) {
        strength += 1;
    }
    if (hasSpecialChar) {
        strength += 1;
    }

    if (!lengthValid) {
        display.innerHTML = "A senha deve ter pelo menos 8 caracteres";
    } else if (strength === 0) {
        display.innerHTML = "A senha é fraca";
        updateProgressBar();
    } else if (strength === 1) {
        display.innerHTML = "A senha é razoável";
        updateProgressBar();
    } else if (strength === 2) {
        display.innerHTML = "A senha é boa";
        updateProgressBar();
    } else if (strength === 3) {
        display.innerHTML = "A senha é forte";
        updateProgressBar();
    } else if (strength === 4) {
        display.innerHTML = "A senha é muito forte";
        updateProgressBar();
    }
    progress = (strength / 4) * 100;
}

function toggleVisibility() {
    var x = document.getElementById("password");
    var btn = document.getElementById("buttonIcon");
    if (x.type === "password") {
        x.type = "text";
        btn.src = "assets/view.png";
    } else {
        x.type = "password";
        btn.src = "assets/hide.png";
    }
}