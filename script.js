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
					<img src="${card.previewImage}" alt="${card.name} image" />
				</div>
				<div class="template-details">
					<h5 class="template-title">${card.name}</h5>
					<div class="stacks">
						${stackHTML}
					</div>
				</div>

				<div class="template-overlay">
					<button data-preview="${card.templatePath}" class="cta-btn preview-btn">Live Preview</button>
					<button class="cta-btn">Get the Code</button>
				</div>
			</article>
		`;

		gallery.insertAdjacentHTML("beforeend", newCard);
	});
}

gallery.addEventListener("click", (e) => {
	if (e.target.classList.contains("preview-btn")) {
		setPreviewParams(e.target);
	}
});

function setPreviewParams(btn) {
	const previewUrl = btn.getAttribute("data-preview");
	if (previewUrl) {
		window.open(previewUrl, "_blank");
	}
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
