import {ManageUsers} from "core/auth/ManageUsers";
import { Users } from "core/Users";

export class TwitterProvider implements ManageUsers {

    getUsersFromProvider(username: string): Users {
        return new Users(username, 25);
    }

}
