import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },

    reviewText: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }
}, {timestamps:true})


export const Review = mongoose.model('Review', reviewSchema);
