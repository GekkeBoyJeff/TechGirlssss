import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
    profilePic: {
        type: String,
        default: '',
        required: false
    },
    completedWelcome:{
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User