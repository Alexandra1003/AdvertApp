import { IUser } from './user.i';
import { IUserResponse } from './userResponce.i';

export interface IUserService {
  login(IUser): IUserResponse;
  logout(): any;
  getCurrentUser(): IUserResponse;
}
