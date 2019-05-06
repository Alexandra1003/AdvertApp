import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/interfaces/user.i';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-auth-form',
  providers: [UserService],
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  authForm: FormGroup;
  username: FormControl;
  password: FormControl;
  currentUser: IUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
  }

  createForm() {
    this.authForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const userData = {username: this.username.value, password: this.password.value};
    this.currentUser = this.userService.login(userData);
  }

  onLogOut() {
    this.currentUser = null;
  }

}
