const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const slider = document.querySelector(".slider");
const burgerBtn = document.querySelector(".bars-logo");
const burgerMenu = document.querySelector(".burger-menu");
const closeBtn = document.querySelector(".close-icon");

let currentPosition = 0;

function slide(slideTo) {
	const slideWidth = slider.clientWidth; 
	const maxScrollLeft = slider.scrollWidth - slider.clientWidth; 

	if (slideTo === "prev") {
		if (slider.scrollLeft === 0) return; 
		slider.scrollBy({
			left: -slideWidth, 
			behavior: "smooth", 
		});
	} else if (slideTo === "next") {
		if (slider.scrollLeft === maxScrollLeft) return; 
		slider.scrollBy({
			left: slideWidth, 
			behavior: "smooth", 
		});
	}
}

function toggleMenu() {
	burgerMenu.classList.toggle("open");

	if (burgerMenu.classList.contains("open")) {
		burgerMenu.style.transform = "translateX(0)";
	} else {
		burgerMenu.style.transform = "translateX(110%)";
	}
}

nextBtn.addEventListener("click", () => {
	slide("next");
});

prevBtn.addEventListener("click", () => {
	slide("prev");
});

burgerBtn.addEventListener("click", () => {
	toggleMenu();
});

closeBtn.addEventListener("click", () => {
	toggleMenu();
});
