import UserModel from "../models/UserModel"

export default class UserDto {
    name: string
    email: string
    age: number

    constructor(user: UserModel) {
        this.name = user.name
        this.email = user.email
        this.age = user.age
    }
}

