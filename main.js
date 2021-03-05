import home from "/components/home.js";
import about from "/components/about.js";
import contact from "/components/contact.js";
import error from "/components/error.js";
document.addEventListener("DOMContentLoaded", () => {
	const routerLinks = document.getElementsByClassName("router-link");
	const app = document.getElementById("app");
	const routes = {
		"/vanillaJS-router/": home(),
		"/vanillaJS-router/index.html": home(),
		"/vanillaJS-router/contact": contact(),
		"/vanillaJS-router/about": about(),
		"/vanillaJS-router/error": error(),
	};

	const render = (component) => {
		if (component !== undefined) {
			app.innerHTML = component;
		} else {
			window.location.pathname = "/vanillaJS-router/error";
		}
	};

	const onNavClick = (pathname) => {
		window.history.pushState({}, pathname, window.location.origin + pathname);
		render(routes[pathname]);
	};

	render(routes[window.location.pathname]);

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
