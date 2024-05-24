import { validate } from '../utils/inputValidation.js';

export function errorReporter(req, res, errors, skipValidation = false) {
    if(skipValidation) {
        errors = validate(req.body, req.route);
    }
    if (errors) {
        return res.render(`pages${req.path}`, { 
            errors: errors,
            title: req.route.title,
            scripts: req.route.scripts,
            functions: req.route.functions  
        })
    }
}