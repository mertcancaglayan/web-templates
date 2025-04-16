document.addEventListener("DOMContentLoaded", function () {
	const hamburger = document.querySelector(".hamburger");
	const navLinks = document.querySelector(".nav-links");

	hamburger.addEventListener("click", function () {
		this.classList.toggle("active");
		navLinks.classList.toggle("active");
	});
});

document.querySelectorAll(".nav-links a").forEach((link) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const targetId = this.getAttribute("href").substring(1);
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			const offset = 80;
			const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: elementPosition - offset,
				behavior: "smooth",
			});
		}
	});
});
