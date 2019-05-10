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
  constructor(private adsService: AdsService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    const adsList = this.adsService.getAllAds();
    this.currentAd = adsList.find( ({ id }) => id == this.route.snapshot.params.id);
    this.currentUser = this.userService.getCurrentUser();
  }

  onDeleteAd() {
    this.adsService.deleteAd(this.currentAd.id);
  }
}
