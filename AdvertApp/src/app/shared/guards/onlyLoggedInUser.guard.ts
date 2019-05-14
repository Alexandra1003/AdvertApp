import { CanActivate, UrlTree, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OnlyLoggedInUserGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(): boolean | UrlTree {
    const tree: UrlTree = this.router.parseUrl('');

    return this.userService.getCurrentUser() ? true : tree;

  }
}
