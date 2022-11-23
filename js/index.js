import { Router } from "./routes.js";

const router = new Router();

router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploration", "/pages/exploration.html");
router.add(404, "/pages/404.html");

router.handleRoutes();

const menuLinks = document.querySelectorAll("nav a")
const body = document.querySelector("body")

window.onpopstate = () => router.handleRoutes(); // faz com que a página retorne usando a seta "voltar" do navegador
window.route = () => {
    const clickedLink = window.event.target
    router.route(); // vai acessar a funçaõ route que é usado no onclick do html

    menuLinks.forEach(link => {
        if (clickedLink.href == link.href) {
            link.classList.add("active")
            
            body.removeAttribute('class')
            body.classList.add(`bg-${link.dataset.id}`)
            
        }else{
            link.classList.remove("active")
        }
    })
}