import { registerUser, loginUser, logoutUser } from '../controllers/userController.js'
import { errorReporter } from '../controllers/formErrorHandler.js'

export const routes = {
    '/': { view: 'pages/index', title: 'Home of techGirlsss', layouts: 'default.ejs', scripts: ['script', 'test'], functions: [], middleware: [], errors: [] },
    '/login': { view: 'pages/login', title: 'Login', scripts: [], functions: [loginUser, errorReporter], middleware: [], errors: [] },
    '/register': { view: 'pages/register', title: 'Register', scripts: [], functions: [registerUser, errorReporter], middleware: [], errors: []},
    '/about': { view: 'pages/about', title: 'About', scripts: [], functions: [], middleware: [], errors: [] },
    '/contact': { view: 'pages/contact', title: 'Contact', scripts: [], functions: [], middleware: [], errors: [] },
    '/logout': { title: 'Logout', scripts: [], functions: [logoutUser], middleware: [], errors: [], onlyPost: true },
}