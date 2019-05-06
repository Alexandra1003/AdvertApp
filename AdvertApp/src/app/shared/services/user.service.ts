import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user.i';
import { IUserService } from 'src/app/shared/interfaces/user.service.i';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  constructor() { }

  login(user): IUser {

    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([user]));
      return user;
    }

    const usersList = JSON.parse(localStorage.getItem('users'));
    const registeredUser = usersList.find(({ username }) => username === user.username);

    if (!registeredUser) {
      localStorage.setItem('users', JSON.stringify([...usersList, user]));
      return user;
    }
    if (registeredUser && registeredUser.password === user.password) {
      return user;
    }
    if (registeredUser && registeredUser.password !== user.password) {
      console.log("Wrong password");
      return null;
    }
  }

  logout() { }

  getCurrentUser(): IUser {
    return null;
  }
}
