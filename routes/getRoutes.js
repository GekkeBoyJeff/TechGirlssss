import {routes} from './routes.js'
import xssMiddleware from '../middlewares/xssMiddleware.js';

export default function (app) {
    for (const [path, route] of Object.entries(routes)) {
        if (!route.onlyPost) {
            const middlewares = route.middleware
            app.get(path, xssMiddleware, middlewares, (req, res) => { 
                res.render(route.view, route);
            });
        }
    }
}