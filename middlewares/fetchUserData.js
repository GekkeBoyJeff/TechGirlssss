import User from '../models/userModel.js'

export default async function fetchUserData(req, res, next){
    let user
    if(req.session.userId && req.originalUrl !== '/favicon.ico' && req.originalUrl !== '/logout'){
        console.log("fetchUserData middleware triggered for: ", req.originalUrl); 
        try{
            user = await User.findById(req.session.userId)
            // console.log(user)
            res.locals.user = {
                id: user._id,
                name: user.name,
                email: user.email,
                introduction: user.completedWelcome,
                currentStep: user.currentStep,
                age: user.age,
                country: user.country,
                language: user.language,
                activeTime: user.activeTime,
                social: user.social,
                wantToDiscover: user.wantToDiscover,
                spendingTimePreferences: user.spendingTimePreferences,
                preferredArtForm: user.preferredArtForm,
                musicStyle: user.musicStyle,
                emotion: user.emotion,
                advertise: user.advertise
            }
            user = res.locals.user
            // console.log(user)

            if(user.introduction === false){
                console.log('introduction not completed yet')
                if(req.originalUrl !== '/welcome'){
                    return res.redirect('/welcome')
                }
            }
        }
        catch (error){
            console.log(error)
            res.locals.user = null
            user = null
        }
    }
    else{
        res.locals.user = null
        user = null
    }
    next();
}