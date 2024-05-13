import User from '../models/userModel.js'

export async function registerUser(req, res) {
    console.log('start registerUser', req.body)

    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            console.log('User already exists')
            return
        } else {
            const newUser = new User({
                email: req.body.email,
                username: req.body.username,
                password: req.body.password
            })
            await newUser.save()
            console.log('User saved', newUser)
        }
    }
    catch (err) {
        console.error(err);
    }

    res.redirect('/')
}