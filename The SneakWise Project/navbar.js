//Simple functionality for opening and closing navbar, speed established in css. 
var navbarOpen = false;
var navbar = document.getElementById("navbar");

function openNavbar() {
    if (!navbarOpen) {
        navbar.classList.add("navbar-responsive");
        navbarOpen = true;
    }
}

function closeNavbar() {
    if (navbarOpen) {
        navbar.classList.remove("navbar-responsive");
        navbarOpen = false;
    }
}
