const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach((n) =>
	n.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	}),
);

// Filter functionality
const filterBtns = document.querySelectorAll(".filter-btn");
const classCards = document.querySelectorAll(".class-card");

filterBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		// Remove active class from all buttons
		filterBtns.forEach((b) => b.classList.remove("active"));
		btn.classList.add("active");

		const filter = btn.dataset.filter;

		classCards.forEach((card) => {
			if (filter === "all" || card.dataset.category === filter) {
				card.style.display = "block";
			} else {
				card.style.display = "none";
			}
		});
	});
});
const toggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".price");

toggle.addEventListener("change", () => {
	prices.forEach((priceElement) => {
		const monthly = priceElement.dataset.monthly;
		const annual = priceElement.dataset.annual;
		const spans = priceElement.getElementsByTagName("span");

		if (toggle.checked) {
			priceElement.innerHTML = `$${annual}<span>/yr</span>`;
			spans[0].textContent = "/yr";
		} else {
			priceElement.innerHTML = `$${monthly}<span>/mo</span>`;
			spans[0].textContent = "/mo";
		}
	});
});

let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");
const slider = document.querySelector(".testimonials-carousel");
const slideWidth = slides[0].getBoundingClientRect().width;

function showSlide(n) {
	currentSlide = (n + slides.length) % slides.length;
	slides.forEach((slide) => {
		slide.classList.remove("active");
		slide.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
	});
	dots.forEach((dot) => dot.classList.remove("active"));

	slides[currentSlide].classList.add("active");
	dots[currentSlide].classList.add("active");
}

// Button controls
document.querySelector(".prev-btn").addEventListener("click", () => {
	showSlide(currentSlide - 1);
});

document.querySelector(".next-btn").addEventListener("click", () => {
	showSlide(currentSlide + 1);
});

// Dot controls
dots.forEach((dot, index) => {
	dot.addEventListener("click", () => {
		showSlide(index);
	});
});

// Auto-rotate
setInterval(() => {
	showSlide(currentSlide + 1);
}, 5000);
