setInterval(() => {
    if(localStorage.getItem("currentUser")) {
        document.getElementById("logs").style.display = "none";
        document.getElementById("logs1").style.display = "flex";
        console.log(localStorage.getItem("currentUser"))
        document.getElementById("userdis").textContent = localStorage.getItem("currentUser")
    }
}, 100);


function logmenu() {
    document.getElementById("logmenus").style.top = document.getElementById("logmenus").style.top == "15%" ? "-100%" : "15%"
}

function logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentPass");
    window.location.href = "signin.html"
}
var user = document.getElementById("user");
var pass = document.getElementById("pass");
function login() {
    if(user.value === localStorage.getItem(user.value) && pass.value === localStorage.getItem(pass.value)) {
        localStorage.setItem("currentUser", user.value);
        localStorage.setItem("currentPass", pass.value);
        window.location.href = "index.html"
    }
}