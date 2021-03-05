import Router from "/vanillaJS-router/src/classes/Router.js";
import home from "/vanillaJS-router/src/components/home.js";
import about from "/vanillaJS-router/src/components/about.js";
import contact from "/vanillaJS-router/src/components/contact.js";
import error from "/vanillaJS-router/src/components/error.js";

const selector = "router-link";
const app = document.getElementById("app");
const routes = {
	"/vanillaJS-router/": home.init(),
	"/vanillaJS-router/index.html": home.init(),
	"/vanillaJS-router/contact": contact.init(),
	"/vanillaJS-router/about": about.init(),
	"/vanillaJS-router/error": error.init(),
};
const router = new Router(app, selector, routes);
