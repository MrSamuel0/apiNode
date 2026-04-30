import UserService from "./services/UserService"
import UserController from "./controllers/UserController"
import express from "express"
import UserRoutes from "./routes/UserRoutes"
import UserContext from "./db/UserContext"
import UserRepository from "./repository/UserRepository"
import { userModel } from "./models/UserModel"
import IUserRepository from "./repository/IUserRepository"

const PORT = process.env.PORT || 3000
const db = new UserContext
db.connect("")
const repo = new UserRepository(userModel)
const service = new UserService(repo)
const controller = new UserController(service)

const app = express()
app.use(express.json())
app.use(UserRoutes(controller))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
