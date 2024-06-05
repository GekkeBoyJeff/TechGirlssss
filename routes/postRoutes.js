import {routes} from './routes.js'
import xssMiddleware from '../middlewares/xssMiddleware.js'

export default function(app){
    for (const [path, route] of Object.entries(routes)) {
        app.post(path, xssMiddleware, async (req, res) => {
            route.functions.forEach(async func => await func(req, res))
        })
    }
}