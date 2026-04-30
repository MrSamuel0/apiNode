import UserService from "./services/UserService"
import UserModel from "./models/UserModel"
import UserController from "./controllers/UserController"
import express from "express"
import UserRoutes from "./routes/UserRoutes"

const PORT = process.env.PORT || 3000
const users: UserModel[] = []
const service = new UserService(users)
const controller = new UserController(service)

const app = express()
app.use(express.json())
app.use(UserRoutes(controller))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
