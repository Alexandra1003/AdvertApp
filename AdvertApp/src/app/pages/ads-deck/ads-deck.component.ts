import { Component, OnInit } from '@angular/core';
import { AdsService } from '../../shared/services/ads.service';
import { IAd } from 'src/app/shared/interfaces/ad.i';
import { mockAds } from 'src/app/shared/mocks/mock.ads';
import { UserService } from 'src/app/shared/services/user.service';
import { IUserResponse } from 'src/app/shared/interfaces/userResponce.i';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads-deck',
  templateUrl: './ads-deck.component.html',
  styleUrls: ['./ads-deck.component.scss']
})
export class AdsDeckComponent implements OnInit {

  p: number = 1;
  adsList: IAd[];
  currentUser: IUserResponse;
  constructor(private adsService: AdsService, public userService: UserService, private router: Router) { }

  ngOnInit() {
    // this.adsService.setTempAds(mockAds);
    this.adsList = this.adsService.getAllAds();

    this.userService.currentUserSubject
      .subscribe(user => {
        this.currentUser = user;
      });
  }

  onDelete(adId) {
    this.adsService.deleteAd(adId);
    this.adsList = this.adsService.getAllAds();
  }

  setCurrentUser() {
    this.currentUser = this.userService.getCurrentUser();
  }

  onCreateAdClick() {
    this.router.navigate(['/edit']);
  }

}
