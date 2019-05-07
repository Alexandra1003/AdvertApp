import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user.i';
import { IUserService } from 'src/app/shared/interfaces/user.service.i';
import { IUserResponse } from '../interfaces/userResponce.i';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  constructor() { }

  login(user): IUserResponse {

    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([user]));
      return {username: user.username, isCorrectPassword: true};
    }

    const usersList = JSON.parse(localStorage.getItem('users'));
    const registeredUser = usersList.find(({ username }) => username === user.username);

    if (!registeredUser) {
      localStorage.setItem('users', JSON.stringify([...usersList, user]));
      return {username: user.username, isCorrectPassword: true};
    }
    if (registeredUser && registeredUser.password === user.password) {
      return {username: user.username, isCorrectPassword: true};
    }
    if (registeredUser && registeredUser.password !== user.password) {
      return {username: user.username, isCorrectPassword: false};
    }
  }

  logout() { }

  getCurrentUser(): IUser {
    return null;
  }
}
