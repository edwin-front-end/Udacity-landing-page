/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navBar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// looping over the sections to create "li" element
const NavBuilder = () => {
	sections.forEach((section) => {
		const listItem = document.createElement("li");
		listItem.classList.add("list-item")
		// create an anchor tag for the menu links
		listItem.innerHTML = `<a href="" class="menu__link">${section.dataset.nav}</a>`;
		// listen to the click event on "li" element to scroll to the selected section
		listItem.addEventListener("click", (e) => {
			e.preventDefault();
			section.scrollIntoView({
				behavior: "smooth",
				block: "end",
				inline: "nearest",
			});
		});
		// appending "li" to the "ul"
		navBar.appendChild(listItem);
	});
};

NavBuilder();

// Add class 'active' to section when near top of viewport
const navBarLinks = document.querySelectorAll("a.menu__link");
console.log(navBarLinks)

const sectionObserver = () => {
	// Intersection Observer API used to observe which section is on the viewport
	const options = {
		root: null,
		threshold: 0.35,
		rootMargin: "0px",
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				entry.target.classList.remove("your-active-class");
				navBarLinks.forEach((link) => {
					link.
					classList.remove("active");
				});
			} else {
				entry.target.classList.add("your-active-class");
				navBarLinks.forEach((link)=>{link.classList.add("active")})
			}
		});
	}, options);

	sections.forEach((section) => {
		observer.observe(section);
	});
};

sectionObserver();
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
