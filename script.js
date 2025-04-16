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

let templates = [];
let template;

function getData() {
	fetch("template.json")
		.then((res) => res.json())
		.then((result) => {
			if (Array.isArray(result) && result.length > 0) {
				templates = result;
				template = templates[0].templatePath;

				getSinglePage();
			}
		});
}

getData();

async function getSinglePage() {
	console.log(template);
	const iframe = document.getElementById("testFrame");
	iframe.src = template;
}
