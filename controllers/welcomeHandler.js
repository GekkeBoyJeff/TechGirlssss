import User from '../models/userModel.js'

const choiceToIdMapping = {
    'Night': ['906748518227', '901535917197'],
    'Morning': ['920869985917'],
    "Extravert": ['897275724847'],
    'NewExperiences': ['906787765617', '852932272387'],
    'ProfessionalGrowth': ['743010011947', '911969133227', '922738394377'],
    'UnleashCreativity': ['918895269487', '913980017837'],
    'Inspiration': ['910372377287'],
    'GameArt': ['907428301477'],
    'LikeMindedPeople': ['823564683137'],
}

export const welcomeHandler = async (req, res) => {
    console.log('welcomeHandler')
    try{
        const user = await User.findById(req.session.userId)
        let currentStep = user.currentStep
        if(req.body.action === 'back'){
            currentStep--
            user.currentStep = currentStep
            await user.save()
            return res.redirect('/welcome')
        }
        switch(currentStep){
            case 0:
                console.log('step 0')
                currentStep++
                break
            case 1:
                currentStep++
                console.log(user)
                user.age = req.body.age
                user.country = req.body.country
                user.language = req.body.language
                break
            case 2:
                currentStep++
                console.log(user)
                user.activeTime = req.body.activeTime
                user.social = req.body.social
                user.advertise = [...new Set([...user.advertise, ...(choiceToIdMapping[user.activeTime] || []), ...(choiceToIdMapping[user.social] || [])])] // remove duplicates from array and add new values to array by spreading them out and using Set to remove duplicates
                break
            case 3:
                currentStep++
                console.log(user)
                user.wantToDiscover = req.body.wantToDiscover.split(',').map(choice => choice.charAt(0).toUpperCase() + choice.slice(1))
                user.spendingTimePreferences = req.body.spendingTimePreferences.split(',')
                user.advertise = [...new Set([...user.advertise, ...user.wantToDiscover.flatMap(choice => choiceToIdMapping[choice] || []), ...user.spendingTimePreferences.flatMap(choice => choiceToIdMapping[choice] || [])])]
                break
            case 4:
                currentStep++
                user.preferredArtForm = req.body.artStyle
                user.advertise = [...new Set([...user.advertise, ...user.preferredArtForm.flatMap(choice => choiceToIdMapping[choice] || []), ...user.preferredArtForm.flatMap(choice => choiceToIdMapping[choice] || [])])]
                break
            case 5:
                currentStep++
                user.musicStyle = req.body.musicStyle
                user.advertise = [...new Set([...user.advertise, ...user.musicStyle.flatMap(choice => choiceToIdMapping[choice] || []), ...user.musicStyle.flatMap(choice => choiceToIdMapping[choice] || [])])]
                break
            case 6:
                currentStep++
                user.completedWelcome = true
                user.emotion = req.body.emotion
                user.advertise = [...new Set([...user.advertise, ...user.emotion.flatMap(choice => choiceToIdMapping[choice] || []), ...user.emotion.flatMap(choice => choiceToIdMapping[choice] || [])])]
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