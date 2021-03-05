export default class Router {
	constructor(app, selector, routes) {
		this.app = app;
		this.selector = selector;
		this.routes = routes;
		this.render(routes[window.location.pathname]);
        this.watch()
	}
	render = (component) => {
		if (component !== undefined) {
			app.innerHTML = component;
		} else {
			app.innerHTML = this.routes["/error"];
		}
	};
	onNavClick = (pathname) => {
		window.history.pushState({}, pathname, window.location.origin + pathname);
		this.render(this.routes[pathname]);
	};
	watch = () => {
		document.addEventListener("click", (e) => {
			if (e.target.classList.contains(this.selector)) {
				e.preventDefault();
				let route = e.target.getAttribute("href");
				this.onNavClick(route);
			}
		});
		window.onpopstate = () => {
			this.render(this.routes[window.location.pathname]);
		};
	};
}