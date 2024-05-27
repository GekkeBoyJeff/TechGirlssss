import {routes} from './routes.js'
import xssMiddleware from '../middlewares/xssMiddleware.js'
// import fetchUserData from '../middlewares/fetchUserData.js'

export default function (app) {
    for (const [path, route] of Object.entries(routes)) {
        if (!route.onlyPost) {
            app.get(path, xssMiddleware, (req, res) => { 
                res.render(route.view, route);
            });
        }
    }
}