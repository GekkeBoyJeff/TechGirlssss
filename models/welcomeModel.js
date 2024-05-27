import mongoose from 'mongoose'

const welcomeSchema = new mongoose.Schema({
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
    }
}, {
    timestamps: true
})