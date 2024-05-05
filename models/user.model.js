import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
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
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User