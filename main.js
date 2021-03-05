import home from "/components/home.js";
import about from "/components/about.js";
import contact from "/components/contact.js";
import error from "/components/error.js";
document.addEventListener("DOMContentLoaded", () => {
	const routerLinks = document.getElementsByClassName("router-link");
	const app = document.getElementById("app");
	const routes = {
		"/": home(),
		"/index.html": home(),
		"/contact": contact(),
		"/about": about(),
		"/error": error(),
	};

	const render = (component) => {
		if (component !== undefined) {
			app.innerHTML = component;
		} else {
			window.location.pathname = "/error";
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
			let route = e.target.getAttribute("href");
			onNavClick(route);
		});
	}
	window.onpopstate = () => {
		app.innerHTML = routes[window.location.pathname];
	};
});
