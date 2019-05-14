import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { IUserResponse } from 'src/app/shared/interfaces/userResponce.i';
import { Router } from '@angular/router';
import { forbiddenSymbolValidator } from 'src/app/shared/directives/forbidden-symbol.directive';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  authForm: FormGroup;
  username: FormControl;
  password: FormControl;
  currentUser: IUserResponse;
  isWrongPassword: boolean;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.username = new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      forbiddenSymbolValidator(/\s/)
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      forbiddenSymbolValidator(/\s/)
    ]);
  }

  createForm() {
    this.authForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const userData = { username: this.username.value, password: this.password.value };
    const userResponse = this.userService.login(userData);
    if (userResponse.isCorrectPassword) {
      this.currentUser = userResponse;
      this.authForm.reset();
    }
    this.isWrongPassword = !userResponse.isCorrectPassword;
  }

  onLogOut() {
    this.userService.logout();
    this.isWrongPassword = false;
    this.router.navigate(['/']);
  }

}
