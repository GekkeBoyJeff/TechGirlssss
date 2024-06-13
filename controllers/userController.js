import User from '../models/userModel.js'
import { encryptPassword } from '../utils/encryptPassword.js'
import { decryptPassword } from '../utils/decryptPassword.js'
import { errorReporter } from './formErrorHandler.js'
import { validate } from '../utils/inputValidation.js'

export const registerUser = async (req, res) => {
    console.log('registerUser', req.body)
    try {
        const errors = validate(req.body, req.route)
        if (errors) {
            errorReporter(req, res, errors)
            return
        }
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            errorReporter(req, res, [{ msg: 'User already exists' }, true])
            return
        }
        const hash = encryptPassword(req.body.password)
        const newUser = new User({
            email: req.body.email,
            name: req.body.name,
            password: hash,
            completedWelcome: false,
            currentStep: 0
        })
        await newUser.save()
        console.log('User registered', newUser)
        res.redirect('/login')
    }
    catch (err) {
        console.error(err)
        errorReporter(req, res, [{ msg:'An error occurred while registering' }, true])
    }
}

export const loginUser = async (req, res) => {
    if(req.body.email && req.body.password) {
        try {
            const errors = validate(req.body, req.route)
            if (errors) {
                errorReporter(req, res, errors)
                return
            }
            const user = await User.findOne({ email: req.body.email })
            if (!user) {
                errorReporter(req, res, [{ msg: 'User does not exist' }, true])
                return
            }
            const isMatch = decryptPassword(req.body.password, user.password )
            if (!isMatch) {
                errorReporter(req, res, [{ msg: 'Incorrect password' }, true])
                return
            }
    
            console.log('User logged in', user)
            console.log('User id', user._id)
            req.session.userId = user._id
            res.redirect('/')
        }
        catch (err) {
            console.error(err)
            errorReporter(req, res, [{ msg: 'An error occurred while logging in' }, true])
        }
    }
}

export const logoutUser = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err)
            return
        }
        res.clearCookie('connect.sid')
        res.redirect('/')
    })
}