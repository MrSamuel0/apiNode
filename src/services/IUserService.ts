import { IUser } from "../models/UserModel";
import UserDto from "../dto/UserDto";

interface IUserService {
    addUser: (user: IUser) => UserDto;
    getUser: (id: number) => UserDto;
    updateUser: (id: number, user: IUser) => UserDto;
    deleteUser: (id: number) => void;
}

export default IUserService


