const routes = [
    { path: '/', view: 'pages/index', title: 'Home of techGirlsss', layouts: 'default.ejs', scripts: ['script', 'test'] },
    { path: '/login', view: 'pages/login', title: 'Login', scripts: null },
    { path: '/register', view: 'pages/register', title: 'Register', scripts: null },
    { path: '/about', view: 'pages/about', title: 'About', scripts: null },
    { path: '/contact', view: 'pages/contact', title: 'Contact', scripts: null }
];

export default function (app) {
    routes.forEach(route => {
        app.get(route.path, (req, res) => {
            res.render(route.view, { title: route.title, layouts: route.layouts, scripts: route.scripts });
        });
    });
}