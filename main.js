document.addEventListener("DOMContentLoaded", () => {
	let routerLinks = document.getElementsByClassName("router-link");
	let app = document.getElementById("app");
	//Declare the variables for home, about & contact html pages
	let home = "";
	let about = "";
	let contact = "";
	let routes;

	/**
	 *
	 * @param {String} page - Represents the page information that needs to be retrieved
	 * @returns {String} resHtml - The Page's HTML is returned from the async invocation
	 */

	const loadPage = async (page) => {
		const response = await fetch(page);
		const resHtml = await response.text();
		return resHtml;
	};

	/**
	 * The Async function loads all HTML to the variables 'home', 'about' & 'contact'
	 */
	const loadAllPages = async () => {
		home = await loadPage("components/home.html");
		about = await loadPage("components/about.html");
		contact = await loadPage("components/contact.html");
		error = await loadPage("components/error.html");
	};
	/**
	 * The Main Function is an async function that first loads All Page HTML to the variables
	 * Once the variables are loaded with the contents, then they are assigned to the 'routes' variable
	 */
	const render = async (component) => {
		await loadAllPages();
		if(component !== undefined) {
			app.innerHTML = component;
		} else {
			window.history.pushState({}, "/vanillaJS-router/error", window.location.origin + "/vanillaJS-router/error");
			windows.location.pathname = "/vanillaJS-router/error";
			app.innerHTML = error;
		}
	}

	const main = async () => {
		await loadAllPages();
		routes = {
			"/vanillaJS-router/": home,
			"/vanillaJS-router/index.html": home,
			"/vanillaJS-router/contact": contact,
			"/vanillaJS-router/about": about,
			"/vanillaJS-router/error": error,
		};
		render(routes[window.location.pathname]);
	};
	const onNavClick = (pathname) => {
		window.history.pushState({}, pathname, window.location.origin + pathname);
		render(routes[pathname]);
	};

	// Invoke the Main function
	main();

	for (let routerLink of routerLinks) {
		routerLink.addEventListener("click", (e) => {
			e.preventDefault();
			let route = `/vanillaJS-router${e.target.getAttribute("href")}`;
			onNavClick(route);
		});
	}
	window.onpopstate = () => {
		app.innerHTML = routes[window.location.pathname];
	};
});
