gsap.from('.h2', { duration: 5, y: 30, opacity: 0, ease: 'power2.out' });




var x=document.getElementById("login");

var y=document.getElementById("register");

var z=document.getElementById("btn");
function registe(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}function logi(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var showPasswordCheckbox = document.getElementById("showPassword");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showPasswordCheckbox.textContent = "Hide";
    } else {
      passwordInput.type = "password";
      showPasswordCheckbox.textContent = "Show";
    }
  }



