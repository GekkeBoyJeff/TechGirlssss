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
    '/events': { view: 'pages/events_workshops', title: 'Events & workshops', scripts: [], functions: [], errors: [] },
    '/detailevent': { view: 'pages/detail_event', title: 'Event', scripts: [], functions: [], errors: [] },
    '/formStep0': { view: 'partials/welcomeForm/formStep0', title: 'Form Step 0', scripts: [], functions: [], errors: [] },
    '/formStep1': { view: 'partials/welcomeForm/formStep1', title: 'Form Step 1', scripts: [], functions: [], errors: [] },
    '/formStep2': { view: 'partials/welcomeForm/formStep2', title: 'Form Step 2', scripts: [], functions: [], errors: [] },

    
}