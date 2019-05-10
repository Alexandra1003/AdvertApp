import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdsService } from 'src/app/shared/services/ads.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { IUserResponse } from 'src/app/shared/interfaces/userResponce.i';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  title: FormControl;
  description: FormControl;
  currentUser: IUserResponse;
  constructor(private adsService: AdsService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.currentUser = this.userService.getCurrentUser();
  }

  createFormControls() {
    this.title = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
  }

  createForm() {
    this.editForm = new FormGroup({
      title: this.title,
      description: this.description
    });
  }

  onCreate(event) {
    event.preventDefault();

    const newAdData = {
      title: this.title.value,
      description: this.description.value,
      authorName: this.currentUser.username,
      createAd: new Date()
    };

    this.adsService.createAd(newAdData);
    this.router.navigate(['/']);
  }
}
