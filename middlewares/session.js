import session from 'express-session'

export default function sessionMiddleware(app) {
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false,
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true
         }
    }))
}

