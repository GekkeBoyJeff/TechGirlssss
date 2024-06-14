import {routes} from './routes.js'
import xssMiddleware from '../middlewares/xssMiddleware.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

export default function (app) {
    for (const [path, route] of Object.entries(routes)) {
        const middlewares = [xssMiddleware]
        if (route.requiresAuth) {
            middlewares.push(isAuthenticated)
        }
        if (!route.onlyPost) {
            app.get(path, middlewares, ...route.fetches, (req, res) => { 
                console.log("Route handler reached for:", path)
                // console.log(req.acceptsLanguages()) // get user language https://expressjs.com/en/api.html#req.acceptsLanguages
                res.render(route.view, {...route, 
                    specificEvent: req.specificEvent, 
                    popularEvents: req.popularEvents,
                    popularEventOrganizers: req.popularEventOrganizers,
                    multipleSpecificEvent: req.multipleSpecificEvent,
                    apiData: req.apiData,}
                )                
            })
        }
    }
}
