const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
	link.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navLinks.classList.remove("active");
	});
});

// Close menu on window resize
window.addEventListener("resize", () => {
	if (window.innerWidth > 1024) {
		hamburger.classList.remove("active");
		navLinks.classList.remove("active");
	}
});

document.addEventListener("DOMContentLoaded", () => {
	const btnToggles = document.querySelectorAll(".tour-card__toggle-btn");

	btnToggles.forEach((btn) => {
		btn.addEventListener("click", () => {
			const toggleContainer = btn.parentElement;
			const priceContainer = btn.closest(".tour-card").querySelector(".tour-card__price-section");
			const basicPrice = priceContainer.querySelector(".basic-price");
			const premiumPrice = priceContainer.querySelector(".premium-price");

			// Toggle active state
			toggleContainer.querySelectorAll(".tour-card__toggle-btn").forEach((btn) => {
				btn.classList.remove("active");
			});
			btn.classList.add("active");

			// Show/Hide prices
			if (btn.textContent.trim() === "Basic") {
				basicPrice.style.display = "block";
				premiumPrice.style.display = "none";
			} else {
				basicPrice.style.display = "none";
				premiumPrice.style.display = "block";
			}
		});
	});
});

document.querySelector(".newsletter-close").addEventListener("click", () => {
	document.querySelector(".newsletter-bar").style.display = "none";
});

// FAQ Toggle Functionality
document.querySelectorAll(".faq-card").forEach((card) => {
	card.addEventListener("click", () => {
		card.classList.toggle("active");
	});
});
