import { Injectable } from '@angular/core';
import { IUserService } from 'src/app/shared/interfaces/user.service.i';
import { IUserResponse } from '../interfaces/userResponce.i';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  currentUser: IUserResponse;
  currentUserSubject: Subject<IUserResponse> = new Subject();
  constructor() { }

  login(user): IUserResponse {
    this.currentUser = { username: user.username, isCorrectPassword: true };
    this.currentUserSubject.next(this.currentUser);

    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([user]));
      return this.currentUser;
    }

    const usersList = JSON.parse(localStorage.getItem('users'));
    const registeredUser = usersList.find(({ username }) => username === user.username);

    if (!registeredUser) {
      localStorage.setItem('users', JSON.stringify([...usersList, user]));
      return this.currentUser;
    }
    if (registeredUser && registeredUser.password === user.password) {
      return this.currentUser;
    }
    if (registeredUser && registeredUser.password !== user.password) {
      return { username: user.username, isCorrectPassword: false };
    }
  }

  logout() { }

  getCurrentUser(): IUserResponse {
    console.log(this.currentUser)
    return this.currentUser;
  }
}
