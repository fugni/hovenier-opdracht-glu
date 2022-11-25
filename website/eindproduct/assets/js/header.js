const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    if (hamburgerMenu.style.display == "block") {
        hamburgerMenu.style.display = "none";
    } else {
        hamburgerMenu.style.display = "block";
    }
    console.log("a")
})