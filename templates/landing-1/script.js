// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-link").forEach((n) =>
	n.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	}),
);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
			}
		});
	},
	{
		threshold: 0.1,
	},
);

// Apply to all animate-on-scroll elements
document.querySelectorAll(".animate-on-scroll").forEach((element) => {
	observer.observe(element);
});

// Lightbox Functionality
const mediaPreview = document.querySelector(".media-preview");
const lightbox = document.querySelector(".lightbox");
const closeBtn = document.querySelector(".close-btn");

mediaPreview.addEventListener("click", () => {
	lightbox.classList.add("active");
});

closeBtn.addEventListener("click", () => {
	lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
	if (e.target === lightbox) {
		lightbox.classList.remove("active");
	}
});

// Accordion Functionality
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
	const question = item.querySelector(".faq-question");

	question.addEventListener("click", () => {
		const isActive = item.classList.contains("active");

		// Close all items
		faqItems.forEach((otherItem) => {
			otherItem.classList.remove("active");
			otherItem.querySelector(".faq-answer").style.maxHeight = null;
		});

		// Toggle current item if not active
		if (!isActive) {
			item.classList.add("active");
			const answer = item.querySelector(".faq-answer");
			answer.style.maxHeight = answer.scrollHeight + "px";
		}
	});
});

// Handle window resize
window.addEventListener("resize", () => {
	document.querySelectorAll(".faq-item.active .faq-answer").forEach((answer) => {
		answer.style.maxHeight = answer.scrollHeight + "px";
	});
});

// Form Validation
const form = document.querySelector(".contact-form");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let isValid = true;

	// Clear previous errors
	document.querySelectorAll(".error-message").forEach((error) => {
		error.style.display = "none";
	});

	// Validate name
	const nameInput = document.getElementById("name");
	if (nameInput.value.trim() === "") {
		showError(nameInput, "Name is required");
		isValid = false;
	}

	// Validate email
	const emailInput = document.getElementById("email");
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(emailInput.value.trim())) {
		showError(emailInput, "Please enter a valid email");
		isValid = false;
	}

	// Validate message
	const messageInput = document.getElementById("message");
	if (messageInput.value.trim() === "") {
		showError(messageInput, "Message is required");
		isValid = false;
	}

	if (isValid) {
		// Simulate form submission
		form.reset();
		form.style.display = "none";
		successMessage.style.display = "flex";
		successMessage.style.flexDirection = "column";
		successMessage.style.alignItems = "center";
	}
});

function showError(input, message) {
	const error = input.parentElement.querySelector(".error-message");
	error.textContent = message;
	error.style.display = "block";
	input.style.borderColor = "#dc3545";
}

// Reset input styles on focus
document.querySelectorAll("input, textarea").forEach((input) => {
	input.addEventListener("input", () => {
		input.style.borderColor = "#ddd";
		input.parentElement.querySelector(".error-message").style.display = "none";
	});
});

// Newsletter Form Validation
document.querySelector(".newsletter-form").addEventListener("submit", (e) => {
	e.preventDefault();
	const email = e.target.querySelector("input").value;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (emailRegex.test(email)) {
		// Handle successful subscription
		e.target.reset();
		alert("Thank you for subscribing!");
	} else {
		alert("Please enter a valid email address");
	}
});

// Smooth scroll for anchor links
document.querySelectorAll(".footer-link").forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		const targetId = link.getAttribute("href");
		document.querySelector(targetId).scrollIntoView({
			behavior: "smooth",
		});
	});
});
