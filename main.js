var sideNav = document.getElementById("sideNav");
var menuBtn = document.getElementById("menuBtn");
var menu = document.getElementById("menu");

sideNav.style.right ="-250px";

menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src ="assets/img/close.png";
    }
    else{
        sideNav.style.right = "-250px";
        menu.src = "assets/img/menu.png";
    }
}