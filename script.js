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

const gallery = document.getElementById("gallery");

function displayCards(cards) {
	cards.forEach((card) => {
		const techIcons = {
			HTML: "assets/icons/html5.png",
			CSS: "assets/icons/css-3.png",
			JavaScript: "assets/icons/js.png",
			Tailwind: "assets/icons/tailwind.png",
			React: "assets/icons/react.png",
		};

		let stackHTML = (card.technology || [])
			.map(
				(stack) => `
				<span>
					<img src="${techIcons[stack] || "assets/icons/default.png"}" alt="${stack} icon" />
					${stack}
				</span>`,
			)
			.join("");

		let newCard = `
			<article class="template-container">
				<div class="template-img-container">
					<img loading="lazy" src="${card.previewImage}" alt="${card.name} image" />
				</div>
				<div class="template-details">
					<h5 class="template-title">${card.name}</h5>
					<div class="stacks">
						${stackHTML}
					</div>
				</div>

				<div class="template-overlay">
					<a href="${card.templatePath}" target="_blank" class="cta-btn">Live Preview</a>
					<a href="${card.downloadPath}" download class="cta-btn"> Download  </a>
				</div>
			</article>
		`;

		gallery.insertAdjacentHTML("beforeend", newCard);
	});
}

let templates = [];

function getData() {
	fetch("template.json")
		.then((res) => res.json())
		.then((result) => {
			if (Array.isArray(result) && result.length > 0) {
				templates = result;
				displayCards(templates);
			}
		})
		.catch((err) => console.error("Error loading templates:", err));
}

getData();

const searchBox = document.getElementById("search");

searchBox.addEventListener("input", () => {
	debounce();
});

let timer;
let timeout = 1000;

function debounce() {
	clearTimeout(timer);
	timer = setTimeout(() => {
		filterCards();
	}, timeout);
}

function filterCards(params) {
	const query = searchBox.value.toLowerCase().trim();

	const filtered = templates.filter((card) => {
		const name = card.name.toLowerCase();
		const tags = (card.tags || []).join(" ").toLowerCase();
		const tech = (card.technology || []).join(" ").toLowerCase();

		return name.includes(query) || tags.includes(query) || tech.includes(query);
	});

	gallery.innerHTML = "";
	
	const heroSection = document.querySelector(".hero-section");
	const contentGrid = document.querySelector(".content-grid");

	if (query === "") {
		heroSection.classList.remove("hero-hidden");
		contentGrid.classList.remove("content-slide-up");
	} else {
		heroSection.classList.add("hero-hidden");
		contentGrid.classList.add("content-slide-up");
	}

	if (filtered.length > 0) {
		displayCards(filtered);
	} else {
		gallery.innerHTML = `
		<div class="no-results">
			<p>No templates found.</p>
		</div>
	`;
	}
}
