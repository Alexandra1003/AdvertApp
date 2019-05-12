import { Injectable } from '@angular/core';
import { IAd } from 'src/app/shared/interfaces/ad.i';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  currentAdsList: IAd[];
  constructor(private router: Router) { }

  getAllAds() {
    this.currentAdsList = JSON.parse(localStorage.getItem('ads'));
    return this.currentAdsList;
  }

  getAd(adId) {
    const adsList = this.getAllAds();
    const ad = adsList.find(({ id }) => id == adId);

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
    const adObj = Object.assign({}, ad);
    adObj.id = this.getNewId();

    if (!localStorage.getItem('ads')) {
      localStorage.setItem('ads', JSON.stringify([adObj]));
      return adObj.id;
    }

    localStorage.setItem('ads', JSON.stringify([...this.currentAdsList, adObj]));

    return adObj.id;
  }

  updateAd(updatedAd) {
    const adsList = this.getAllAds();
    const targetAd = adsList.find(({ id }) => id == updatedAd.id);
    const targetAdIndex = adsList.indexOf(targetAd);

    adsList[targetAdIndex] = updatedAd;
    localStorage.setItem('ads', JSON.stringify(adsList));
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
