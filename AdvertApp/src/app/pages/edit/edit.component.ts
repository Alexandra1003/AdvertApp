import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdsService } from 'src/app/shared/services/ads.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { IUserResponse } from 'src/app/shared/interfaces/userResponce.i';
import { forbiddenSymbolValidator } from 'src/app/shared/directives/forbidden-symbol.directive';

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
  editMode = false;

  constructor(private adsService: AdsService, private router: Router,
    private userService: UserService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.currentUser = this.userService.getCurrentUser();

    if (this.route.snapshot.params.id) {
      this.editMode = true;
      const currentAdData = this.adsService.getAd(this.route.snapshot.params.id);
      this.title.setValue(currentAdData.title);
      this.description.setValue(currentAdData.description);
    }
  }

  createFormControls() {
    this.title = new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
      forbiddenSymbolValidator(/^\s+$/)
    ]);
    this.description = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      forbiddenSymbolValidator(/^\s+$/)
    ]);
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
      id: null,
      title: this.title.value,
      description: this.description.value,
      authorName: this.currentUser.username,
      createdAt: new Date()
    };

    if (this.editMode) {
      newAdData.id = this.route.snapshot.params.id;
      this.adsService.updateAd(newAdData);
      this.router.navigate([`/${newAdData.id}`]);
    } else {
      this.router.navigate([`/${this.adsService.createAd(newAdData)}`]);
    }
  }
}
