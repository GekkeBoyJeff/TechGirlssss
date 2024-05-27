import User from '../models/userModel.js'

export default async function fetchUserData(req, res, next){
    let user
    if(req.session.userId && req.originalUrl !== '/favicon.ico' && req.originalUrl !== '/logout'){
        console.log("fetchUserData middleware triggered for: ", req.originalUrl); 
        try{
            user = await User.findById(req.session.userId)
            res.locals.user = {
                id: user._id,
                name: user.name,
                email: user.email,
                introduction: user.completedWelcome,
                currentStep: user.currentStep
            }
            user = res.locals.user
            console.log(user)

            if(user.introduction === false){
                console.log('introduction not completed yet')
                if(req.originalUrl !== '/Welcome'){
                    return res.redirect('/Welcome')
                }
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