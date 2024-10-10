var user = document.getElementById("user");
var pass = document.getElementById("pass");
function signup() {
    localStorage.setItem(user.value, user.value);
    localStorage.setItem(pass.value, pass.value);
    localStorage.setItem("currentUser", user.value);
    localStorage.setItem("currentPass", pass.value);
    window.location.href = "index.html"
}