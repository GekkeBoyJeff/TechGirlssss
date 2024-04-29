export default function (app) {
    app.get('/', async (req, res) => {
        res.render('pages/index', { title: 'Home of techGirlsss', layouts: 'default.ejs', script: ['script', 'test'] },)
    })

    app.get('/login', async (req, res) => {
        res.render('pages/login', { title: 'Login', script: null })
    })

    app.get('/register', async (req, res) => {
        res.render('pages/register', { title: 'Register', script: null })
    })

    app.get('/about', async (req, res) => {
        res.render('pages/about', { title: 'About', script: null })
    }
    )

    app.get('/contact', async (req, res) => {
        res.render('pages/contact', { title: 'Contact', script: null })
    }
    )
}