const hamburger = document.getElementById("hamburger-menu");
const mainNav = document.getElementById("main-nav");
const navMenu = mainNav.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	mainNav.classList.toggle("mobile-active");
});

navMenu.querySelectorAll("a").forEach((link) => {
	link.addEventListener("click", () => {
		hamburger.classList.remove("active");
		mainNav.classList.remove("mobile-active");
	});
});
