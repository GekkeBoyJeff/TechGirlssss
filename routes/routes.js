export default function (app) {
    app.get('/', async (req, res) => {
        res.render('pages/index', { title: 'Home of techGirlsss', layouts: 'default.ejs' },)
    })

    app.get('/login', async (req, res) => {
        res.render('pages/login', { title: 'Login' })
    })

    app.get('/register', async (req, res) => {
        res.render('pages/register', { title: 'Register' })
    })

    app.get('/about', async (req, res) => {
        res.render('pages/about', { title: 'About' })
    }
    )

    app.get('/contact', async (req, res) => {
        res.render('pages/contact', { title: 'Contact' })
    }
    )
}