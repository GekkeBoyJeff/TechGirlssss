import User from '../models/userModel.js'
import { encryptPassword } from '../utils/encryptPassword.js'
import { decryptPassword } from '../utils/decryptPassword.js'

export async function registerUser(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            console.log('User already exists')
            return
        }
        const hash = encryptPassword(req.body.password)
        const newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: hash,
        })
        await newUser.save()
    }
    catch (err) {
        console.error(err);
    }
    res.redirect('/')
}

export async function loginUser(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            console.log('User not found')
            return
        }
        const isMatch = decryptPassword(req.body.password, user.password )
        if (!isMatch) {
            console.log('Incorrect password')
            return
        }

        console.log('User logged in', user)
    }
    catch (err) {
        console.error(err);
    }
    res.redirect('/')
}