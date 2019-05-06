import { IUser } from './user.i';

export interface IUserService {
  login(IUser): IUser;
  logout(): any;
  getCurrentUser(): IUser;
}
