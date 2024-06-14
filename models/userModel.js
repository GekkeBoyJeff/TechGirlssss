import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
    completedWelcome:{
        type: Boolean,
        default: false
    },
    currentStep:{
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    age:{
        type: Number
    },
    country:{
        type: String
    },
    language:{
        type: String
    },
    activeTime:{
        type: String
    },
    social:{
        type: String
    },
    wantToDiscover:{
        type: Array
    },
    spendingTimePreferences:{
        type: Array
    },
    preferredArtForm:{
        type: Array
    },
    musicStyle:{
        type: Array
    },
    emotion:{
        type: Array
    },
    advertise:{
        type: Array
    }
}, 
{
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User