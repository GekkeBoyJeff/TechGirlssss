import {routes} from './routes.js'

export default function (app) {
    for (const [path, route] of Object.entries(routes)) {
        if (!route.onlyPost) {
            const middlewares = route.middleware
            app.get(path, middlewares, (req, res) => { 
                res.render(route.view, route);
            });
        }
    }
}