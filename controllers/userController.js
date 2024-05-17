import User from '../models/userModel.js'
import { encryptPassword } from '../utils/encryptPassword.js'

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
        console.log('User saved', newUser)
    }
    catch (err) {
        console.error(err);
    }
    res.redirect('/')
}