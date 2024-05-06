import {routes} from './routes.js'

export default function(app){
    for (const [path, route] of Object.entries(routes)) {
        app.post(path, (req, res) => {
            route.functions.forEach(func => func(req, res))
        })
    }
}