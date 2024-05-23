import { validate } from '../utils/inputValidation.js';

export function errorReporter(req, res) {
    const errors = validate(req.body, req.route);
    if (errors) {
        return res.render(`pages${req.path}`, { 
            errors: errors,
            title: req.route.title,
            scripts: req.route.scripts,
            functions: req.route.functions  
        })
    }
    else {
        return
    }
}
