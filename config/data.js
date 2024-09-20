import mongoose from "mongoose"

export const connection = async () => {
    {
        try {
            await mongoose.connect(process.env.MONGO0SE_DB_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                connectTimeoutMS: 30000,  // increase to 30 seconds
                socketTimeoutMS: 45000    // increase to 45 seconds
            })
            console.log('Connect succese !!')
        } catch (error) {
            console.log('Connect failed', error)
        }
    }
}