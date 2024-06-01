import User from '../models/userModel.js';

export const welcomeHandler = async (req, res) => {
    console.log('welcomeHandler')
    try{
        const user = await User.findById(req.session.userId)

        let currentStep = user.currentStep
        switch(currentStep){
            case 0:
                console.log('step 0')
                currentStep++
                break
            case 1:
                currentStep++
                user.age = req.body.age
                user.country = req.body.country
                user.language = req.body.language
                break
            case 2:
                currentStep++
                user.activeTime = req.body.activeTime
                user.social = req.body.social
                break
            case 3:
                currentStep++
                user.wantToDiscover = req.body.wantToDiscover
                user.spendingTimePreferences = req.body.spendingTimePreferences
                break
            case 4:
                currentStep++
                user.preferredArtForm = req.body.artStyle
                break
            case 5:
                currentStep++
                user.musicStyle = req.body.musicStyle
                break
            case 6:
                currentStep++
                user.completedWelcome = true
                user.emotion = req.body.emotion
                break
        }
        user.currentStep = currentStep
        await user.save()
        res.redirect('/')
    }
    catch(error){
        console.log('error', error)
    }
}