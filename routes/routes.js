const routes = {
    '/' : { view: 'pages/index', title: 'Home of techGirlsss', layouts: 'default.ejs', scripts: ['script', 'test'] },
    '/login' : { view: 'pages/login', title: 'Login', scripts: null },
    '/register' : { view: 'pages/register', title: 'Register', scripts: null },
    '/about' : { view: 'pages/about', title: 'About', scripts: null },
    '/contact' : { view: 'pages/contact', title: 'Contact', scripts: null }
}

export default function (app) {
    for (const [path, route] of Object.entries(routes)) {  // Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs
        app.get(path, (req, res) => { 
            res.render(route.view, route); // route is an object with view, title, layouts, and scripts properties
        });
    }
}