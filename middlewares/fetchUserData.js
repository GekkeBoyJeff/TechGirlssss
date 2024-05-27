import User from '../models/userModel.js'

export default async function fetchUserData(req, res, next){
    if(req.session.userId && req.originalUrl !== '/favicon.ico'){
        console.log("fetchUserData middleware triggered for:", req.originalUrl); 
        try{
            const user = await User.findById(req.session.userId)
            res.locals.user = {
                id: user._id,
                name: user.name,
                email: user.email,
                introduction: user.completedWelcome,
                currentStep: user.currentStep
            }

            if(!user.introduction){
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