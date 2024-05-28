import {routes} from './routes.js'
import xssMiddleware from '../middlewares/xssMiddleware.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

export default function (app) {
    for (const [path, route] of Object.entries(routes)) {
        const middlewares = [xssMiddleware];
        if (route.requiresAuth) {
            middlewares.push(isAuthenticated);
        }
        if (!route.onlyPost) {
            app.get(path, middlewares, async (req, res) => { 
                if (route.functions && route.functions.length > 0) {
                    for (const func of route.functions) {
                        await func(req, res);
                    }
                }
                res.render(route.view, route);
            });
        }
    }
}