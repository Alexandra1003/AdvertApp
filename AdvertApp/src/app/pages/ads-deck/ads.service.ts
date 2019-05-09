import { Injectable } from '@angular/core';
import { IAd } from 'src/app/shared/interfaces/ad.i';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  currentAdsList: IAd[];
  newAdsList: IAd[];
  constructor() { }

  setTempAds(adsList) {
    localStorage.setItem('ads', `${JSON.stringify(adsList)}`);
  }

  getAllAds() {
    console.log(JSON.parse(localStorage.getItem('ads')));
    this.currentAdsList = JSON.parse(localStorage.getItem('ads'));
    return this.currentAdsList;
  }

  deleteAd(adId) {
    this.currentAdsList = this.currentAdsList.filter(({ id }) => id !== adId);
    localStorage.setItem('ads', `${JSON.stringify(this.currentAdsList)}`)
    console.log(this.currentAdsList)
  }
}
