import { registerUser, loginUser, logoutUser } from '../controllers/userController.js'
import { errorReporter } from '../controllers/formErrorHandler.js'
import fetchApi from '../api/fetchEventbride.js' 

export const routes = {
    '/': { view: 'pages/index', title: 'Home of techGirlsss', layouts: 'default.ejs', scripts: ['script', 'test'], functions: [fetchApi], errors: [] },
    '/login': { view: 'pages/login', title: 'Login', scripts: [], functions: [loginUser, errorReporter], errors: [] },
    '/register': { view: 'pages/register', title: 'Register', scripts: [], functions: [registerUser, errorReporter], errors: []},
    '/about': { view: 'pages/about', title: 'About', scripts: [], functions: [], middleware: [], errors: [] },
    '/contact': { view: 'pages/contact', title: 'Contact', scripts: [], functions: [], errors: [] },
    '/logout': { title: 'Logout', scripts: [], functions: [logoutUser], errors: [], onlyPost: true },
    '/welcome': { view: 'pages/welcome', title: 'Introduction', scripts: [], functions: [], errors: [], requiresAuth: true },
}