import mongoose from "mongoose"
const Schema = mongoose.Schema

export {
    Dish
}


const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    content: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

const dishSchema = new Schema({
    isActive: {
        type: Boolean,
        required: true,
    },
    isBuy: {
        type: Boolean,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: String,
    minPrice: Number,
    maxPrice: Number,
    whoWants: [{type: Schema.Types.ObjectId, ref: "Profile"}],
    comments: [commentSchema]

}, {
    timestamps: true,
})

const Dish = mongoose.model("Dish", dishSchema)