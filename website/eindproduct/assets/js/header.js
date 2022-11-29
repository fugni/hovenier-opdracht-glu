const hamburgerIcon = document.querySelector(".hamburger-icon")

hamburgerIcon.addEventListener("click", () => {
    const navbar = document.getElementById("navbar");
    if (navbar.className === "navbar") {
        navbar.className = "hamburgered"
    } else {
        navbar.className = "navbar"
    }
})