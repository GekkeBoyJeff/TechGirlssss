import xss from 'xss'

export default function xssMiddleware(req, res, next) {
    if (req.body) {
        for (let key in req.body) {
            req.body[key] = xss(req.body[key])
        }
    }
    next()
}