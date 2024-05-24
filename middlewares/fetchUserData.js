import User from '../models/userModel.js'

export default async function fetchUserData(req, res, next){
    if(req.session.userId){
        try{
            const user = await User.findById(req.session.userId)
            res.locals.user = {
                id: user._id,
                username: user.username,
                email: user.email
            }
        }
        catch (error){
            console.log(error)
            res.locals.user = null;
        }
    }
    else{
        res.locals.user = null;
    }
    next();
}