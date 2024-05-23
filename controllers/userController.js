import User from '../models/userModel.js'
import { encryptPassword } from '../utils/encryptPassword.js'
import { decryptPassword } from '../utils/decryptPassword.js'

export async function registerUser(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            renderError(res, req.url, [{ msg: 'User already exists' }])
            return
        }
        const hash = encryptPassword(req.body.password)
        const newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: hash,
        })
        await newUser.save()
        res.redirect(req.url)
    }
    catch (err) {
        console.error(err)
        renderError(res, req.path , [{ msg: 'An error occurred while registering' }])
    }
}

export async function loginUser(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            renderError(res, req.url, [{ msg: 'User does not exist' }])
            return
        }
        const isMatch = decryptPassword(req.body.password, user.password )
        if (!isMatch) {
            renderError(res, req.url, [{ msg: 'Incorrect password' }])
            return
        }

        console.log('User logged in', user)
        res.redirect('/')
    }
    catch (err) {
        console.error(err)
        renderError(res, req.url, [{ msg: 'An error occurred while logging in' }])
    }
}

function renderError(res, route, errors) { 
    res.render(`pages${route}`, { 
        errors,
        title: route.title,
        scripts: route.scripts,
        functions: route.functions  
    })
}