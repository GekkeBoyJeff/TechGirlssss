import {routes} from './routes.js'
import xssMiddleware from '../middlewares/xssMiddleware.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'
import { fetchApi } from '../api/fetchEventbride.js'

export default function (app) {
    for (const [path, route] of Object.entries(routes)) {
        const middlewares = [xssMiddleware];
        if (route.requiresAuth) {
            middlewares.push(isAuthenticated);
        }
        if (!route.onlyPost) {
            app.get(path, middlewares, (req, res) => { 
                console.log(req.acceptsLanguages()) // get user language https://expressjs.com/en/api.html#req.acceptsLanguages
                res.render(route.view, route)
                // console.log('route: ' + JSON.stringify(req.apiData))            
            })
        }
    }
}
