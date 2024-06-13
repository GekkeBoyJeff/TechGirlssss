import { registerUser, loginUser, logoutUser } from '../controllers/userController.js'
import { errorReporter } from '../controllers/formErrorHandler.js'
import { welcomeHandler } from '../controllers/welcomeHandler.js'
import { fetchPopularEvents, fetchSpecificEvent, fetchApi } from '../api/fetchEventbride.js'

export const routes = {
    '/': { view: 'pages/index', title: 'Home of techGirlsss', layouts: 'default.ejs', scripts: ['script', 'test'], fetches:[fetchPopularEvents], functions: [], errors: [] },
    '/login': { view: 'pages/login', title: 'Login', scripts: [], functions: [loginUser, errorReporter],fetches:[], errors: [] },
    '/register': { view: 'pages/register', title: 'Register', scripts: [], functions: [registerUser, errorReporter],fetches:[], errors: []},
    '/about': { view: 'pages/about', title: 'About', scripts: [], functions: [], errors: [],fetches:[]},
    '/contact': { view: 'pages/contact', title: 'Contact', scripts: [], functions: [], errors: [],fetches:[] },
    '/logout': { title: 'Logout', scripts: [], functions: [logoutUser], errors: [], onlyPost: true,fetches:[] },
    '/welcome': { view: 'pages/welcome', title: 'Introduction', scripts: [], functions: [welcomeHandler], errors: [], requiresAuth: true,fetches:[] },
    '/profile': { view: 'pages/profile', title: 'Profile', scripts: [], functions: [], errors: [], requiresAuth: true,fetches:[] },
    '/events': { view: 'pages/eventsWorkshops', title: 'Events & workshops', scripts: [], functions: [], errors: [], apiData:[],fetches:[fetchApi] },
    '/events/:id': { view: 'pages/detailEvent', title: 'Event', scripts: [], functions: [], errors: [], fetches:[fetchSpecificEvent] },
}