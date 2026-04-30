import IUserService from "../services/IUserService";
import UserModel from "../models/UserModel";
import {Request, Response} from "express"

export default class UserController {
    constructor(private service: IUserService){}

    getUser = (req: Request, res: Response) => {
        const id = Number(req.params.id)
        const user = this.service.getUser(id)
        res.json(user)
    } 

    addUser = (req: Request, res: Response) => {
        const user: UserModel = req.body

        res.json(this.service.addUser(user))

    }

    updateUser = (req: Request, res: Response) => {
        const id = Number(req.params.id)
        const updatedUser = req.body;

        res.json(this.service.updateUser(id, updatedUser))
    }

    deleteUser = (req: Request, res: Response) => {
        const id = Number(req.params.id)
        
        this.service.deleteUser(id)

        res.json({"Sucess": "User deleted"})
    }
}