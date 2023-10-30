export class Routes {
    routes = {};

    add(routeName, page) {
        this.routes[routeName] = page;
    }

    route(e) {
        e = e || window.event;
        e.preventDefault();

        window.history.pushState({}, "", e.target.href);

        this.handle();
    }

    handle() {
        const { pathname } = window.location;

        const route = this.routes[pathname] || this.routes[404]; 

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector("#main").innerHTML = html;
        });

        this.background(route);
    }

    background(route){
        const page = document.querySelector(".app");
        const header = document.querySelector("header");
        
        switch (route) {
            case '/SPA-Universo/pages/home/home.html':
                page.style.background = "url('./assets/home.png') no-repeat center /cover";
                page.style.color = "#FFFFFF";
                break;

            case '/SPA-Universo/pages/oUniverso/oUniverso.html':
                page.style.background = "url('./assets/universo.png') no-repeat center /cover";
                page.style.color = "#FFFFFF";
                break;

            case '/SPA-Universo/pages/exploracao/exploracao.html':
                page.style.background = "url('./assets/exploracao.png') no-repeat center /cover";
                page.style.color = "#FFFFFF";

                break;
            
            case '/SPA-Universo/pages/notFound/notFound.html':
                header.style.display = "none";
                page.style.background = "#FFFFFF";
                page.style.color = "#000000";
                break;

            default:
                break;
        }
    }
} 