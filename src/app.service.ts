import { Injectable } from '@nestjs/common';
import { User } from './app.controller';

@Injectable()
export class AppService {
  users: User[] = [{ name: 'John', family: 'Doe' }];

  public addUser(newUser: User): User {
    this.users.push(newUser);

    return newUser;
  }

  public deleteUser(name: string): User {
    const user = this.users.find(u => u.name.toLowerCase() === name);

    this.users = this.users.filter(u => u.name.toLowerCase() !== name);

    return user;
  }

  public updateUser(name: string, user: Partial<User>): User {
    this.users = this.users.map(u => {
      if (u.name.toLowerCase() === name) {
        return { ...u, ...user };
      } else {
        return u;
      }
    });

    const updatedUser = this.users.find(
      u => u.name.toLowerCase() === user.name,
    );

    return updatedUser;
  }

  public getUserByName(name: string): User {
    const findUser = this.users.find(u => u.name === name);

    return findUser;
  }

  public getAllUsers(): User[] {
    return this.users;
  }
}
