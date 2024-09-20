import mongoose from "mongoose"

const userProject = mongoose.Schema({
    title: String,
    link: String,
    status: Boolean,
    userId: mongoose.Types.ObjectId,
    dateTime: {
        type: String,
        default: new Date()
    }
})

export const Product = mongoose.models.project || mongoose.model("project", userProject)