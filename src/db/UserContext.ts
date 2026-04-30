import mongoose from "mongoose";

export default class UserContext {
    async connect(connString: string) {
        await mongoose.connect(connString)
    }
}