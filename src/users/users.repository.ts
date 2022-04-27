import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { User, UserDocument } from "./schemas/users.schema"

@Injectable()
export class UsersRepository{
    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

    async findOne(userFilterQuery: FilterQuery<User>): Promise<User> {
        return this.UserModel.findOne(userFilterQuery)
    }

    async find(usersFilterQuery: FilterQuery<User>): Promise<User[]> {
        return this.UserModel.find(usersFilterQuery)
    }

    async create(user: User): Promise<User> {
        const newUser = new this.UserModel(user)
        return newUser.save()
    }

    async findOneAndUpdate(userFilterQuery: FilterQuery<User>, user: Partial<User>): Promise<User>{
        return this.UserModel.findOneAndUpdate(userFilterQuery, user, { new: true })
    }

}