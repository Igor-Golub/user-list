import { User } from "../interfaces";
import { client } from "../client";

class UsersAPI {
  async fetchUsers(): Promise<User[]> {
    return client.get<User[]>('users').then(({data}) => data)
  }
}

export default new UsersAPI()