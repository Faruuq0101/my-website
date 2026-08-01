// ==========================
// THEME TOGGLE
// ==========================

const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-toggle i");

if (themeToggle && themeIcon) {

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeIcon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "dark");

        } else {

            themeIcon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "light");

        }

    });

}

// ==========================
// BACK TO TOP
// ==========================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        backToTop.style.display =
            window.scrollY > 300 ? "block" : "none";

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.classList.add("hide");
    }

});