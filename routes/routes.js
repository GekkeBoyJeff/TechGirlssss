import { registerUser, loginUser, logoutUser } from '../controllers/userController.js'
import { errorReporter } from '../controllers/formErrorHandler.js'
import { welcomeHandler } from '../controllers/welcomeHandler.js'
import { popularEventOrganizers, fetchSpecificEvent, autoCompleteSearch, multipleFetchSpecificEvent } from '../api/fetchEventbride.js'

export const routes = {
    '/': { view: 'pages/index', title: 'Home of techGirlsss', layouts: 'default.ejs', scripts: ['script', 'test'], fetches:[popularEventOrganizers], functions: [], errors: [] },
    '/login': { view: 'pages/login', title: 'Login', scripts: [], functions: [loginUser, errorReporter], fetches: [], errors: [] },
    '/register': { view: 'pages/register', title: 'Register', scripts: [], functions: [registerUser, errorReporter], fetches: [], errors: [] },
    '/about': { view: 'pages/about', title: 'About', scripts: [], functions: [], errors: [], fetches: [] },
    '/faq': { view: 'pages/faq', title: 'FAQ', scripts: ['pedro'], functions: [], errors: [], fetches: [] },
    '/search': { view: 'pages/search', title: 'Search', scripts: [], functions: [autoCompleteSearch], errors: [], fetches:[], givenQuery: ''},
    '/logout': { title: 'Logout', scripts: [], functions: [logoutUser], errors: [], onlyPost: true, fetches: [] },
    '/welcome': { view: 'pages/welcome', title: 'Introduction', scripts: [], functions: [welcomeHandler], errors: [], requiresAuth: true, fetches: [] },
    '/profile': { view: 'pages/profile', title: 'Profile', scripts: [], functions: [], errors: [], requiresAuth: true, fetches: [] },
    '/events': { view: 'pages/eventsWorkshops', title: 'Events & workshops', scripts: [], functions: [], errors: [], apiData: [], fetches: [] },
    '/events/:id': { view: 'pages/detailEvent', title: 'Event', scripts: [], functions: [], errors: [], fetches: [fetchSpecificEvent, multipleFetchSpecificEvent] },
}