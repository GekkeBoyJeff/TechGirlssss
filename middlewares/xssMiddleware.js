import xss from 'xss'

export default function xssMiddleware(req, res, next) {
    console.log('xssMiddleware')
    if (req.body) {
        for (let key in req.body) {
            req.body[key] = xss(req.body[key])
        }
    }
    next()
}