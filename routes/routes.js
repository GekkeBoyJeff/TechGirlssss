import { registerUser, loginUser } from '../controllers/userController.js';

export const routes = {
    '/': { view: 'pages/index', title: 'Home of techGirlsss', layouts: 'default.ejs', scripts: ['script', 'test'], functions: [] },
    '/login': { view: 'pages/login', title: 'Login', scripts: [], functions: [loginUser] },
    '/register': { view: 'pages/register', title: 'Register', scripts: [], functions: [registerUser] },
    '/about': { view: 'pages/about', title: 'About', scripts: [], functions: [] },
    '/contact': { view: 'pages/contact', title: 'Contact', scripts: [], functions: [] }
}