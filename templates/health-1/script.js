// --- Theme Toggle (No Changes) ---
const themeToggleBtns = document.querySelectorAll("#theme-toggle, #theme-toggle-mobile");
const themeToggleDarkIcons = document.querySelectorAll("#theme-toggle-dark-icon, #theme-toggle-dark-icon-mobile");
const themeToggleLightIcons = document.querySelectorAll("#theme-toggle-light-icon, #theme-toggle-light-icon-mobile");
const htmlElement = document.documentElement;
const setThemeIcons = (isDarkMode) => {
	themeToggleDarkIcons.forEach((icon) => {
		icon.classList.toggle("hidden", !isDarkMode);
	});
	themeToggleLightIcons.forEach((icon) => {
		icon.classList.toggle("hidden", isDarkMode);
	});
};
const initializeTheme = () => {
	const isDarkModePreferred =
		localStorage.getItem("color-theme") === "dark" ||
		(!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
	htmlElement.classList.toggle("dark", isDarkModePreferred);
	setThemeIcons(isDarkModePreferred);
};
themeToggleBtns.forEach((btn) => {
	btn.addEventListener("click", function () {
		const isDarkMode = htmlElement.classList.toggle("dark");
		setThemeIcons(isDarkMode);
		localStorage.setItem("color-theme", isDarkMode ? "dark" : "light");
	});
});
initializeTheme();

// --- Mobile Menu (No Changes) ---
const mobileMenuButton = document.getElementById("mobile-menu-button");
const closeMobileMenuButton = document.getElementById("close-mobile-menu");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
const mobileMenuLinks = mobileMenu.querySelectorAll(".mobile-menu-link");
function openMenu() {
	mobileMenu.classList.add("open");
	mobileMenuOverlay.classList.add("visible");
	document.body.style.overflow = "hidden";
}
function closeMenu() {
	mobileMenu.classList.remove("open");
	mobileMenuOverlay.classList.remove("visible");
	document.body.style.overflow = "";
}
mobileMenuButton.addEventListener("click", openMenu);
closeMobileMenuButton.addEventListener("click", closeMenu);
mobileMenuOverlay.addEventListener("click", closeMenu);
mobileMenuLinks.forEach((link) => {
	link.addEventListener("click", closeMenu);
});
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
		closeMenu();
	}
});

// --- FAQ Accordion (No Changes) ---
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
	const questionButton = item.querySelector(".faq-question");
	if (questionButton) {
		questionButton.addEventListener("click", () => {
			item.classList.toggle("open");
		});
	}
});

// --- Contact Form (Mock Submission - No Changes) ---
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
if (contactForm && formStatus) {
	contactForm.addEventListener("submit", (e) => {
		e.preventDefault();
		formStatus.textContent = "Sending...";
		formStatus.className = "form-status form-status-sending";
		setTimeout(() => {
			formStatus.textContent = "Message sent successfully! We will get back to you soon.";
			formStatus.className = "form-status form-status-success";
			contactForm.reset();
			setTimeout(() => {
				formStatus.textContent = "";
				formStatus.className = "form-status";
			}, 5000);
		}, 1500);
	});
} else {
	console.error("Contact form or status element not found.");
}

// --- Fade-in Animation on Scroll ---
const fadeElements = document.querySelectorAll(".fade-in-element");

// Check if IntersectionObserver is supported
if ("IntersectionObserver" in window) {
	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{
			root: null,
			rootMargin: "0px",
			threshold: 0.1,
		},
	);

	fadeElements.forEach((el) => {
		observer.observe(el);
	});
} else {
	fadeElements.forEach((el) => {
		el.classList.add("is-visible");
	});
	console.warn("IntersectionObserver not supported, fade-in animations disabled.");
}
