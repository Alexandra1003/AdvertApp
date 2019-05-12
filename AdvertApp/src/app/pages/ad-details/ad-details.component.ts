import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/shared/services/ads.service';
import { IAd } from 'src/app/shared/interfaces/ad.i';
import { ActivatedRoute } from '@angular/router';
import { IUserResponse } from 'src/app/shared/interfaces/userResponce.i';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit {

  currentAd: IAd;
  currentUser: IUserResponse;
  constructor(public adsService: AdsService, public route: ActivatedRoute,
    public userService: UserService) { }

  ngOnInit() {
    this.currentAd = this.adsService.getAd(this.route.snapshot.params.id);
    this.currentUser = this.userService.getCurrentUser();
  }

  onDelete() {
    this.adsService.deleteAd(this.currentAd.id);
  }
}
