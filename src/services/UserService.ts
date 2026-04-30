import UserModel from "../models/UserModel";
import UserDto from "../dto/UserDto";
import IUserService from "./IUserService";

export default class UserService implements IUserService {
  constructor(private readonly context: UserModel[]){}

  addUser(user: UserModel): UserDto {
    this.context.push(user);
    return new UserDto(user);
  }

  getUser(id: number): UserDto {
    const user = this.context.find(p => p.id === id)

    if(!user) {
      throw new Error("User not found")
    }

    return new UserDto(user);
  }

  updateUser(id: number, user: UserModel): UserDto {
    const oldUser= this.context.find(p => p.id === id)

    if(!oldUser) {
      throw new Error("User not found")
    }

    Object.assign(oldUser, user);

    return new UserDto(oldUser);
  }

  deleteUser(id: number): void {
    const index = this.context.findIndex(p => p.id === id);

    if (index === -1) {
      throw new Error("User not found");
    }

    this.context.splice(index, 1);
  }
}