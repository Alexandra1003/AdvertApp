import { Injectable } from '@angular/core';
import { IAd } from 'src/app/shared/interfaces/ad.i';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  currentAdsList: IAd[];
  constructor(private router: Router) { }

  setTempAds(adsList) {
    localStorage.setItem('ads', `${JSON.stringify(adsList)}`);
  }

  getAllAds() {
    this.currentAdsList = JSON.parse(localStorage.getItem('ads'));
    return this.currentAdsList;
  }

  getAd(adId) {
    const adsList = this.getAllAds();
    const ad = adsList.find( ({ id }) => id == adId);

    if (!ad) {
      this.router.navigate(['/']);
    }
    return ad;
  }

  deleteAd(adId) {
    this.currentAdsList = this.currentAdsList.filter(({ id }) => id !== adId);
    localStorage.setItem('ads', `${JSON.stringify(this.currentAdsList)}`);
  }

  createAd(ad) {
    if (!localStorage.getItem('ads')) {
      localStorage.setItem('ads', JSON.stringify([ad]));
      return;
    }

    localStorage.setItem('ads', JSON.stringify([...this.currentAdsList, ad]));
  }

  getNewId() {
    let lastId: number = Number(localStorage.getItem('lastAdId'));

    if (typeof lastId === 'undefined') {
      localStorage.setItem('lastAdId', '0');
      return 0;
    }

    const newId = ++lastId;
    localStorage.setItem('lastAdId', `${newId}`);
    return newId;
  }
}
