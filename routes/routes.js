import { registerUser, loginUser, logoutUser } from '../controllers/userController.js'
import { errorReporter } from '../controllers/formErrorHandler.js'
import { welcomeHandler } from '../controllers/welcomeHandler.js'

export const routes = {
    '/': { view: 'pages/index', title: 'Home of techGirlsss', layouts: 'default.ejs', scripts: ['script', 'test'], functions: [], errors: [] },
    '/login': { view: 'pages/login', title: 'Login', scripts: [], functions: [loginUser, errorReporter], errors: [] },
    '/register': { view: 'pages/register', title: 'Register', scripts: [], functions: [registerUser, errorReporter], errors: []},
    '/about': { view: 'pages/about', title: 'About', scripts: [], functions: [], middleware: [], errors: [] },
    '/contact': { view: 'pages/contact', title: 'Contact', scripts: [], functions: [], errors: [] },
    '/logout': { title: 'Logout', scripts: [], functions: [logoutUser], errors: [], onlyPost: true },
    '/welcome': { view: 'pages/welcome', title: 'Introduction', scripts: [], functions: [welcomeHandler], errors: [], requiresAuth: true },
    '/profile': { view: 'pages/profile', title: 'Profile', scripts: [], functions: [], errors: [], requiresAuth: true },
    '/events': { view: 'pages/eventsWorkshops', title: 'Events & workshops', scripts: [], functions: [], errors: [] },
    '/detailevent': { view: 'pages/detailEvent', title: 'Event', scripts: [], functions: [], errors: [] },
}