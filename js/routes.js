export class Router {
    routes = {};

    add(routeName, page){
        this.routes[routeName] = page;
    }

    route(event) {
        event = event || window.event; // verifica se passou algum evento, se não passou pega o evento da janela
        event.preventDefault(); // perde o padrão, por padrão a página deve ser redirecionada após o clique, removendo o padrão isso não acontecerá.
      
        window.history.pushState({}, "", event.target.href); // window.history pega o histórico da navegação, com o pushState vai colocar o  histórico no 
      
        this.handleRoutes();
    }

    handleRoutes() {
        const { pathname } = window.location; // variável que recebe o nome do caminho, está sendo feita de forma desitruturada
        const route = this.routes[pathname] || this.routes[404] // criando uma rota, se não tiver a rota maepada mostrar o 404
      
        fetch(route).then( data => data.text()).then(html => {document.querySelector('#app').innerHTML = html}) // função callback
    }
}