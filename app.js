var code = document.getElementById("password");
var strengthbar = document.getElementById("meter");
var display = document.getElementsByClassName("textbox")[0];

code.addEventListener("keyup", function () {
    checkpassword(code.value);
});

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

    } else if (strength === 1) {
        display.innerHTML = "A senha é razoável";
    } else if (strength === 2) {
        display.innerHTML = "A senha é boa";
    } else if (strength === 3) {
        display.innerHTML = "A senha é forte";
    } else if (strength === 4) {
        display.innerHTML = "A senha é muito forte";
    }

    strengthbar.value = (strength / 4) * 100;
}

function toggleVisibility() {
    var x = document.getElementById("password");
    var btn = document.getElementById("buttonIcon")
    if (x.type === "password") {
        x.type = "text";
        btn.src = "assets/view.png"
    } else {
        x.type = "password";
        btn.src = "assets/hide.png"
    }
}

