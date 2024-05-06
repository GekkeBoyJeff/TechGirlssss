import {routes} from './routes.js'

export default function (app) {
    for (const [path, route] of Object.entries(routes)) {  // Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs
        app.get(path, (req, res) => { 
            res.render(route.view, route); // route is an object with view, title, layouts, and scripts properties
        });
    }
}